import express from "express";
const adminRouter = express.Router();

// Signup route
adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "Admin signed up successfully",
  });
});

// Signin route
adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "Admin signed in successfully",
  });
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Here are all courses",
  });
});

export { adminRouter };
