import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
            unique:true,
        },
        categoryCode: {
            type: String,
            unique:true,
        },
        slug: {
            type: String,
            lowercase:true,
        },
        description: {
            type: String,
        },
    }, {
        timestamps: true,
    }
)
export const Category = mongoose.model("Category", categorySchema)