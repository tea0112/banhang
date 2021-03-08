import mongoose from "mongoose";

const chiTietSchema = new mongoose.Schema({
  loai: {
    type: String,
    require: [true, "must have a loai"],
  },
  moTa: {
    type: String,
    require: [true, "must have a moTa"],
  },
});

const sanPhanSchema = new mongoose.Schema({
  ten: {
    type: String,
    required: [true, "must have a ten"],
    unique: true,
  },

  gia: {
    type: Number,
    required: [true, "must have gia"],
  },

  thumbnail: {
    type: String,
    required: [true, "must have a thumbnail"],
    unique: true,
  },

  moTa: {
    type: String,
  },

  chiTiet: [chiTietSchema],

  ngayTao: {
    type: Date,
    require: [true, "must have a ngay"],
  },
});

export default mongoose.model("SanPham", sanPhanSchema);
