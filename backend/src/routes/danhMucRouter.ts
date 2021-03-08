import express from "express";
import verifyToken from "../middlewares/verifyToken";
import {
  getAll,
  getTopFive,
  add,
  deleteOne,
} from "../controllers/danhMucController";

const Router = express.Router();

Router.get("/", getAll);

Router.use(verifyToken);

Router.get("/search", getTopFive);

Router.post("/", add);

Router.delete("/", deleteOne);

export default Router;
