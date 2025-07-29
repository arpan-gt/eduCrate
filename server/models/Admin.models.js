import mongoose from "mongoose";
const adminSchema = new mongoose.Schema(
  {
    userName:
    {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email:
    {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    password:
    {
      type: String,
      required: true
    }
  },
  { timestamps: true });

const Admin = mongoose.model("Admin", adminSchema);
export { Admin }
