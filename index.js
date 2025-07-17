import { userRouter } from "./routes/user.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
import cors from "cors";
import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config();

const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
