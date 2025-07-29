import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    creatorId:
    {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin"
    },
    userId:
    {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    courseId: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course"
    }
  }, { timestamps: true })

const Purchase = mongoose.model("Purchase", purchaseSchema);
export { Purchase }