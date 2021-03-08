import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRouter from "./routes/authRouter";
import verifyToken from "./middlewares/verifyToken";
import quyenRouter from "./routes/quyenRouter";
import nguoiDungRouter from "./routes/nguoiDungRouter";
import danhMucRouter from "./routes/danhMucRouter";

const app = express();

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/nguoidung", nguoiDungRouter);

app.use("/api/v1/quyen", verifyToken, quyenRouter);

app.use("/api/v1/danhmuc", danhMucRouter);

export default app;
