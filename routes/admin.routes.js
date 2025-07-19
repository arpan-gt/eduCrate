import express from "express";
const adminRouter = express.Router();
import { signin, signup, createCourse, updateCourse, allCourses, deleteCourse } from "../controllers/admin.controllers.js";

adminRouter.post("/signup", signup);
adminRouter.post("/signin", signin);
adminRouter.post("/createCourse", createCourse);
adminRouter.put("/course/:id", updateCourse);
adminRouter.get("/allCourses", allCourses);
adminRouter.delete("/delete/:id", deleteCourse)

export { adminRouter };
