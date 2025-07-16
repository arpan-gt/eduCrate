import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

app.listen(prompt, () => {
  console.log(`listening to PORT ${PORT}`);
});
