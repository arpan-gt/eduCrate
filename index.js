import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
