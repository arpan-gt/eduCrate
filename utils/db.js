import mongoose from "mongoose";

const connectDb = async () => {
  const MONGO_URL = process.env.MONGO_URL;

  try {
      await mongoose.connect(MONGO_URL);
      console.log("connected to db");
  } catch (e) {
      console.log("mongodb connection failed ", e.message);
      process.exit(1);
  }
};

export { connectDb };
