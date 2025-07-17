import express from "express";
const userRouter = express.Router();
import { User } from "../models/User.models.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
        user: {
          id: user._id
        }
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


userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json(
      {
        message: "all fields are required"
      }
    )
  }

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json(
        {
          message: "user not registered"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(401).json(
        {
          message: "invalid credentials"
        }
      )
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_USER_SECRET, { expiresIn: "1h" });

    return res.status(200).json(
      {
        message: "login successfully",
        token,
        user: {
          id: existingUser._id,
          userName: existingUser.userName,
          email: existingUser.email
        }
      }

    )
  } catch (err) {
    return res.status(500).json(
      {
        message: "something went wrong",
        error: err.message
      }
    )
  }



})
export { userRouter };
