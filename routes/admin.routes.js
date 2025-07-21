import express from "express";
const adminRouter = express.Router();
import { validateRequest } from "../middlewares/validateRequest.middleware.js";
import { createCourseSchema, updateCourseSchema } from "../schemas/course.schemas.js";
import { signinSchema, signupSchema } from "../schemas/auth.schemas.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import {
  signin,
  signup,
  createCourse,
  updateCourse,
  allCourses,
  deleteCourse
} from "../controllers/admin.controllers.js";


adminRouter.post("/signup", validateRequest(signupSchema), signup);
adminRouter.post("/signin", validateRequest(signinSchema), signin);
adminRouter.post("/createCourse", validateRequest(createCourseSchema), adminMiddleware, createCourse);
adminRouter.put("/course/:id", adminMiddleware, validateRequest(updateCourseSchema), updateCourse);
adminRouter.get("/allCourses", adminMiddleware, allCourses);
adminRouter.delete("/delete/:id", adminMiddleware, deleteCourse)

export { adminRouter };
