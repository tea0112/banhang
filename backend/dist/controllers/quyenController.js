"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuyen = exports.getAllQuyens = void 0;
const Quyen_1 = __importDefault(require("../models/Quyen"));
const getAllQuyens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quyens = yield Quyen_1.default.find({}).exec();
        res.status(200).json({ quyens });
    }
    catch (error) {
        res.status(401).json({
            status: "fail",
            error,
        });
    }
});
exports.getAllQuyens = getAllQuyens;
const createQuyen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quyen = new Quyen_1.default(req.body);
        yield quyen.save();
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
    }
});
exports.createQuyen = createQuyen;
//# sourceMappingURL=quyenController.js.map