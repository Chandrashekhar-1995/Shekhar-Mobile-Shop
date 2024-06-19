import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
    {
        productName: {
            type: String,
            required: [true, "product name is required"],
            unique: true,
            trim: true,
            index:true
        },
        itemCode: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        category: [{
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        }],
        productImage: {
            type: String,// cloudanery url
        },
        purchasePrice: {
            type:Number,
            required:true
        },
        salePrice: {
            type:Number,
            required:true
        },
        description: {
            type: String,
        },
        saleHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:"User"
            }
        ],
        purchaseHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:"User"
            }
        ],
    },
    {
        timestamps: true,
    }
)


productSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", productSchema)