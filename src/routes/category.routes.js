import { Router } from "express";
import { getCategories, getCategoryById, registerCategory } from "../controllers/category.controller.js";

const router = Router()

router.route("/register").post(registerCategory)
router.route("/get-categories").get(getCategories)
router.route("/get-categories-by-id").get(getCategoryById)

export default router;