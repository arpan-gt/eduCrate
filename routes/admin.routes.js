import express from "express";
const adminRouter = express.Router();
import { validateRequest } from "../middlewares/validateRequest.js";
import { createCourseSchema, updateCourseSchema } from "../schemas/course.schemas.js";
import { signinSchema, signupSchema } from "../schemas/auth.schemas.js";
import { signin, signup, createCourse, updateCourse, allCourses, deleteCourse } from "../controllers/admin.controllers.js";

adminRouter.post("/signup", validateRequest(signupSchema), signup);
adminRouter.post("/signin", validateRequest(signinSchema), signin);
adminRouter.post("/createCourse", validateRequest(createCourseSchema), createCourse);
adminRouter.put("/course/:id", validateRequest(updateCourseSchema), updateCourse);
adminRouter.get("/allCourses", allCourses);
adminRouter.delete("/delete/:id", deleteCourse)

export { adminRouter };
