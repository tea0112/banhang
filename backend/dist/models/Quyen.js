"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const quyenSchema = new mongoose_1.Schema({
    ten: {
        type: String,
        required: [true, "must have a ten"],
        unique: true,
    },
});
exports.default = mongoose_1.model("Quyen", quyenSchema);
//# sourceMappingURL=Quyen.js.map