"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
exports.default = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        jsonwebtoken_1.default.verify(authHeader, auth_config_1.default.secretKey, (err, decode) => {
            if (err) {
                res.status(401).json({
                    status: "fail",
                    err,
                });
            }
            else {
                req.email = decode.toString();
                next();
            }
        });
    }
    else {
        res.status(401).json({
            status: "fail",
            message: "No Authorization Header",
        });
    }
};
//# sourceMappingURL=verifyToken.js.map