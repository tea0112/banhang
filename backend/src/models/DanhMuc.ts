import mongoose from "mongoose";

const danhMucSchema = new mongoose.Schema({
  ten: {
    type: String,
    required: [true, "must have ten"],
    unique: true,
  },
  url: {
    type: String,
    required: [true, "must have url"],
    unique: true,
  },
});

export default mongoose.model("DanhMuc", danhMucSchema);
