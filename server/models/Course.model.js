import mongoose, { mongo } from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title:
      {
        type: String,
        required: true,
        minlength: 1,
        trim: true
      },
    description:
      {
        type: String,
        required: true,
      },
    price:
      {
        required: true,
        type: Number
      },
    creatorId:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true
      }
  },
  { timestamps: true });
const Course = mongoose.model("Course", courseSchema);
export { Course }