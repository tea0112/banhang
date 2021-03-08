import express from "express";
import { login } from "../controllers/authController";

const Router = express.Router();

Router.route("/login").post(login);

export default Router;
