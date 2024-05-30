import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            unique: true,
            lowercase: true,
            trim: true,
            index:true
        },
        email: {
            type: String,
            required: [true, " Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: [true, "Fullname is required"],
            trim: true,
            index:true
        },
        avatar: {
            type: String,// cloudanery url
            required:true
        },
        mobileNumber: {
            type:mobileNumber,
            unique: true,
            index:true
        },
        address: {
            type: String,
        },
        purchaseHistory: [
            {
                type: Schema.Types.ObjectId,
                ref:Product
            }
        ],
        dateoFBirth: {
            type:dateoFBirth,
        },
        marrigeAniversary: {
            type:marrigeAniversary,
        },
        bio: {
            type: String,
        },
        userType:{
            type: String,
            default:"Customer"
        },
        password: {
            type: String,
            required: [true, " Password is required"],

        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = bcrypt.hash(this.password, 8)
    next()
})

userSchema.methods.isPasswordCurrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema);