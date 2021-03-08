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
exports.createNguoiDung = exports.getTopFive = exports.getNguoiDung = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const NguoiDung_1 = __importDefault(require("../models/NguoiDung"));
const getNguoiDung = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const nguoidung = yield NguoiDung_1.default.findOne({ email: req.email });
    res.status(200).json(nguoidung);
});
exports.getNguoiDung = getNguoiDung;
const getTopFive = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.query.email) {
            const regex = `^${req.query.email}.*`;
            const nguoidung = yield NguoiDung_1.default.find({
                email: { $regex: regex },
            }).limit(5);
            res.status(200).json(nguoidung);
        }
        else
            res.status(501).json({ query: req.query });
    }
    catch (error) {
        res.sendStatus(404).json({
            error,
        });
    }
});
exports.getTopFive = getTopFive;
const createNguoiDung = (req, res) => {
    // encode password into bcrypt
    bcrypt_1.default.genSalt(10, (error, salt) => {
        if (error == null) {
            bcrypt_1.default
                .hash(req.body.password, salt)
                .then((hash) => {
                const nguoidung = new NguoiDung_1.default(Object.assign(Object.assign({}, req.body), { password: hash }));
                nguoidung
                    .save()
                    .then(() => {
                    res.status(201).json({
                        status: "success",
                        data: req.body,
                    });
                })
                    .catch((err) => {
                    res.status(404).json({
                        status: "fail",
                        data: "Invalid data",
                        error: err,
                    });
                });
            })
                .catch((err) => {
                res.status(404).json({
                    status: "fail",
                    data: "Invalid data",
                    error: err,
                });
            });
        }
        else {
            throw new Error("Invalid password");
        }
    });
};
exports.createNguoiDung = createNguoiDung;
//# sourceMappingURL=nguoiDungController.js.map