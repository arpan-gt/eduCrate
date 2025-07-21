import express from 'express';
import { userMiddleware } from '../middlewares/user.middleware.js';
import { adminMiddleware } from '../middlewares/admin.middleware.js';
import { preview, purchase } from '../controllers/course.controllers.js';
const courseRouter = express.Router();

courseRouter.post("/purchase", userMiddleware || adminMiddleware, purchase);
courseRouter.get("/preview", preview);

export { courseRouter }