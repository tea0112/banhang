"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_config_1 = __importDefault(require("../config/auth.config"));
const NguoiDung_1 = __importDefault(require("../models/NguoiDung"));
function generateAccessToken(email) {
    return jsonwebtoken_1.default.sign(email, auth_config_1.default.secretKey);
}
const login = (req, res) => {
    // find user
    NguoiDung_1.default.findOne({ email: req.body.email })
        .then((nguoiDung) => {
        // user is found
        if (nguoiDung !== null) {
            // compare bcrypt
            bcrypt_1.default.compare(req.body.password, nguoiDung.password, (err, result) => {
                // match
                if (result) {
                    res.status(200).json({
                        accessToken: generateAccessToken(nguoiDung.email),
                    });
                }
            });
        }
        else {
            throw new Error("Invalid Email or Password");
        }
    })
        .catch((error) => {
        res.status(401).json({
            status: "fail",
            data: "Invalid User",
            error,
        });
    });
};
exports.login = login;
//# sourceMappingURL=authController.js.map