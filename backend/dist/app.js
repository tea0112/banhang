"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const verifyToken_1 = __importDefault(require("./middlewares/verifyToken"));
const quyenRouter_1 = __importDefault(require("./routes/quyenRouter"));
const nguoiDungRouter_1 = __importDefault(require("./routes/nguoiDungRouter"));
const danhMucRouter_1 = __importDefault(require("./routes/danhMucRouter"));
const app = express_1.default();
app.use(morgan_1.default("dev"));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use("/api/v1/auth", authRouter_1.default);
app.use("/api/v1/nguoidung", nguoiDungRouter_1.default);
app.use("/api/v1/quyen", verifyToken_1.default, quyenRouter_1.default);
app.use("/api/v1/danhmuc", danhMucRouter_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map