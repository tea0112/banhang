import express from "express";
import verifyToken from "../middlewares/verifyToken";
import permit from "../middlewares/permit";
import * as nguoiDungController from "../controllers/nguoiDungController";

const Router = express.Router();

Router.post("/", nguoiDungController.createNguoiDung);

Router.use(verifyToken);

Router.route("/").get(nguoiDungController.getNguoiDung);

Router.use(permit(["admin"]));

Router.route("/search").get(nguoiDungController.getTopFive);

export default Router;
