import express from "express";
const userRouter = express.Router();
import { purchases, signin, signup } from "../controllers/user.controllers.js";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schemas.js";

userRouter.post("/signup", validateRequest(signupSchema), signup);
userRouter.post("/signin", validateRequest(signinSchema), signin);
userRouter.get("/purchases", userMiddleware, purchases);

export { userRouter };
