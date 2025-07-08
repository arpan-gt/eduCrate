import express from "express";
const userRouter = express.Router();

// Signup route
userRouter.post("/signup", (req, res) => {
  res.json({
    message: "User signed up successfully",
  });
});

// Signin route
userRouter.post("/signin", (req, res) => {
  res.json({
    message: "User signed in successfully",
  });
});

// Get purchases
userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "Here are your purchased courses",
  });
});

export { userRouter };
