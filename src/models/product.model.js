import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const productSchema = new Schema(
    {
        productname: {
            type: String,
            required: [true, "product name is required"],
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
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
        saleHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:User
            }
        ],
        purchaseHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:User
            }
        ],
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)


productSchema.plugin(mongooseAggregatePaginate)

export const Product = mongoose.model("Product", productSchema)