import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const registerCategory = asyncHandler(async (req, res) => {
    const { categoryName, categoryCode } = req.body
    
    if (
        [categoryName].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Category name required")
    }

    const existedCategory = await Category.findOne({categoryName})

    if (existedCategory) {
        throw new ApiError(409, "Category with name already exists")
    }

    const category = await Category.create({
        categoryName,
        categoryCode,
    })
    
    if (!category) {
        throw new ApiError(500, "Something went wrong while registering the category")
    }

    res.status(200).json(
        new ApiResponse(200, category, "Category registered Successfully")
    )
})

const getCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        categories,
        "Categories fetched successfully"
    ))
})

const getCategoryById = asyncHandler(async (req, res) => {

    const category = await Category.findOne(req.body.params);
    
    return res
    .status(200)
    .json(new ApiResponse(
        200,
        req.params.id,
        "Category fetched successfully"
    ))
})


export {
    registerCategory,
    getCategories,
    getCategoryById
}