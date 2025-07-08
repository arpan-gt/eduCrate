import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.route.js";
import { courseRouter } from "./routes/course.route.js";
import { adminRouter } from "./routes/admin.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
