import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";


const registerProduct = asyncHandler( async (req, res) => {
    const { productName, itemCode, purchasePrice, salePrice } = req.body
    
    if (
        [productName, itemCode, purchasePrice, salePrice].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All * fields are required")
    }

    const existedProduct = await Product.findOne({
        $or: [{productName}, {itemCode}]
    })

    if (existedProduct) {
        throw new ApiError(409, "Item with name or item Code already exists")
    }

    //image upload
    // const productLocalPath = req.files?.productImage[0]?.path;    
    // const productPhoto = await uploadOnCloudinary(productLocalPath)
    
    const product = await Product.create({
        productName,
        itemCode,
        purchasePrice,
        salePrice,
        // productImage: productPhoto.url,
    })

    if (!product) {
        throw new ApiError(500, "Something went wrong while registering the product")
    }

    res.status(200).json(
        new ApiResponse(200, product, "Product registered Successfully")
    )

})

export {
    registerProduct
}