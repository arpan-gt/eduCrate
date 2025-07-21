import express from "express";
const userRouter = express.Router();
import { signup, signin, purchases } from "../controllers/user.controllers.js";
import { userMiddleware } from "../middlewares/user.middleware.js";
import { validateRequest } from "../middlewares/validateRequest.middleware.js";

userRouter.post("/signup", validateRequest(signup), signup);
userRouter.post("/signin", validateRequest(signin), signin);
userRouter.get("/purchases", userMiddleware, purchases);

export { userRouter };
