"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const danhMucSchema = new mongoose_1.default.Schema({
    ten: {
        type: String,
        required: [true, "must have ten"],
        unique: true,
    },
    url: {
        type: String,
        required: [true, "must have url"],
        unique: true,
    },
});
exports.default = mongoose_1.default.model("DanhMuc", danhMucSchema);
//# sourceMappingURL=DanhMuc.js.map