import { Router } from "express";
import { registerCategory } from "../controllers/category.controller.js";

const router = Router()

router.route("/register").post(registerCategory)

export default router;