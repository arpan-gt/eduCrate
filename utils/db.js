import mongoose from "mongoose";

const connectDB = async () =>
{
  try
  {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to DB");
  } catch (e)
  {
    console.log("DB connection failed", e);
    process.exit(1);
  }
};

export default connectDB;