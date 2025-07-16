import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title:
      {
        type: String,
        required: true,
        minlength: 1,
        trim:true
      },
    description:
      {
        type: String,
        required:true,
      },
    price:
      {
        required: true,
        type:Number
      },
    courseId:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required:true
      }
  },
  { timestamps: true });
  