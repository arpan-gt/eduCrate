import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName:
      {
        required: true,
        type: String,
        minlength: 2,
        trim:true
      },
    email:
      {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
      },
    password:
      {
        required: true,
        type: String,
      }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export {User}