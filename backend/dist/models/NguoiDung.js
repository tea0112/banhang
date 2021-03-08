"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const nguoiDungSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "must have a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "must have a password"],
    },
    ho: {
        type: String,
        required: [true, "must have a ho"],
    },
    ten: {
        type: String,
        required: [true, "must have a ten"],
    },
    soDienThoai: {
        type: String,
        required: [true, "must have a soDienThoai"],
    },
    ngaySinh: {
        type: Date,
        required: [true, "must have a ngaySinh"],
    },
    diaChi: {
        type: String,
        required: [true, "must have a diaChi"],
    },
    role: {
        type: String,
        required: [true, "must have roles"],
        default: "member",
    },
});
exports.default = mongoose_1.model("NguoiDung", nguoiDungSchema);
//# sourceMappingURL=NguoiDung.js.map