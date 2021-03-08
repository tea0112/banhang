import * as dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Connect successfully");
  })
  .catch((err) => console.log("connection error", err));
app.listen(process.env.PORT, () => {
  console.log("App running on ", process.env.PORT);
});
