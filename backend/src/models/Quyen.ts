import { Schema, model } from "mongoose";

const quyenSchema = new Schema({
  ten: {
    type: String,
    required: [true, "must have a ten"],
    unique: true,
  },
});

export default model("Quyen", quyenSchema);
