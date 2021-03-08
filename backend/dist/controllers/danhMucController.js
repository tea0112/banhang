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
exports.getTopFive = exports.deleteOne = exports.getAll = exports.add = void 0;
const DanhMuc_1 = __importDefault(require("../models/DanhMuc"));
const add = (req, res) => {
    const danhmuc = new DanhMuc_1.default(Object.assign({}, req.body));
    danhmuc
        .save()
        .then(() => {
        res.sendStatus(201);
    })
        .catch((err) => {
        res.status(404).json({
            error: err,
        });
    });
};
exports.add = add;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const danhMucs = yield DanhMuc_1.default.find({});
        res.status(200).json(danhMucs);
    }
    catch (error) {
        res.status(404).json({
            error,
        });
    }
});
exports.getAll = getAll;
const deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const exist = yield DanhMuc_1.default.findOne({
            ten: req.query.ten,
        });
        if (exist) {
            yield DanhMuc_1.default.deleteOne({
                ten: req.query.ten,
            });
            res.status(200).json();
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (error) {
        res.sendStatus(404);
    }
});
exports.deleteOne = deleteOne;
const getTopFive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.ten) {
            const regex = `^${req.query.ten}.*`;
            const danhmuc = yield DanhMuc_1.default.find({
                ten: { $regex: regex },
            }).limit(5);
            res.status(200).json(danhmuc);
        }
        else
            res.sendStatus(404);
    }
    catch (error) {
        res.sendStatus(404).json({
            error,
        });
    }
});
exports.getTopFive = getTopFive;
//# sourceMappingURL=danhMucController.js.map