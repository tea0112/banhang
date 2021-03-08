"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chiTietSchema = new mongoose_1.default.Schema({
    loai: {
        type: String,
        require: [true, "must have a loai"],
    },
    moTa: {
        type: String,
        require: [true, "must have a moTa"],
    },
});
const sanPhanSchema = new mongoose_1.default.Schema({
    ten: {
        type: String,
        required: [true, "must have a ten"],
        unique: true,
    },
    gia: {
        type: Number,
        required: [true, "must have gia"],
    },
    thumbnail: {
        type: String,
        required: [true, "must have a thumbnail"],
        unique: true,
    },
    moTa: {
        type: String,
    },
    chiTiet: [chiTietSchema],
    ngayTao: {
        type: Date,
        require: [true, "must have a ngay"],
    },
});
exports.default = mongoose_1.default.model("SanPham", sanPhanSchema);
//# sourceMappingURL=SanPham.js.map