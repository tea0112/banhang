import express from "express";
import * as quyenController from "../controllers/quyenController";

const Router = express.Router();

Router.route("/")
  .get(quyenController.getAllQuyens)
  .post(quyenController.createQuyen);

export default Router;
