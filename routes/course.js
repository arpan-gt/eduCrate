import express from "express";
const courseRouter = express.Router();

courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "All courses endpoint",
  });
});

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "preview",
  });
});

export { courseRouter };
