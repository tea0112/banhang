"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyToken_1 = __importDefault(require("../middlewares/verifyToken"));
const danhMucController_1 = require("../controllers/danhMucController");
const Router = express_1.default.Router();
Router.get("/", danhMucController_1.getAll);
Router.use(verifyToken_1.default);
Router.get("/search", danhMucController_1.getTopFive);
Router.post("/", danhMucController_1.add);
Router.delete("/", danhMucController_1.deleteOne);
exports.default = Router;
//# sourceMappingURL=danhMucRouter.js.map