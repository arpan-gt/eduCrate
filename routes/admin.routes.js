import express from "express";
const adminRouter = express.Router();
import { signin, signup, createCourse, updateCourse } from "../controllers/admin.controllers.js";

adminRouter.post("/signup", signup);
adminRouter.post("/signin", signin);
adminRouter.post("/createCourse", createCourse);
adminRouter.put("/course/:id", updateCourse);

export { adminRouter };
