import express from "express";
const adminRouter = express.Router();
import { signin, signup } from "../controllers/admin.controllers.js";

adminRouter.post("/signup", signup);
adminRouter.post("/signin", signin);
adminRouter.post("/addCourse", async (req, res) => { })

export { adminRouter };
