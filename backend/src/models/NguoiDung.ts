import { Document, Schema, model, Date } from "mongoose";

const nguoiDungSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, "must have a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "must have a password"],
  },
  ho: {
    type: String,
    required: [true, "must have a ho"],
  },
  ten: {
    type: String,
    required: [true, "must have a ten"],
  },
  soDienThoai: {
    type: String,
    required: [true, "must have a soDienThoai"],
  },
  ngaySinh: {
    type: Date,
    required: [true, "must have a ngaySinh"],
  },
  diaChi: {
    type: String,
    required: [true, "must have a diaChi"],
  },
  role: {
    type: String,
    required: [true, "must have roles"],
    default: "member",
  },
});

export interface INguoiDung extends Document {
  email: string;
  password: string;
  ho: string;
  ten: string;
  soDienThoai: string;
  ngaySinh: Date;
  diaChi: string;
  role: string;
}

export default model("NguoiDung", nguoiDungSchema);
