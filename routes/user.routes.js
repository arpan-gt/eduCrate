import express from "express";
const userRouter = express.Router();
import User from "../models/User.models"
import bcrypt from 'bcrypt';

userRouter.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;

  if (!email || !password || !userName) {
    return res.status(400).json(
      {
        message: "all fields are required"
      })
  }


  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: "email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create(
      {
        userName: userName,
        email: email,
        password: hashedPassword
      })

    return res.status(201).json(
      {
        message: "user registered successfully",
      }
    )

  } catch (err) {
    return res.status(500).json(
      {
        message: "user not registered! try again",
        error: err.message
      }
    )
  }
});

export { userRouter };
