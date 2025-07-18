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
      }
  }, { timestamps: true })

const Purchase = mongoose.model("Purchase", purchaseSchema);
export { Purchase }