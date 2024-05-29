import express from "express";
import cors from "cors";
import { LISTEN_DATA_LIMIT } from "./constants.js";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//Security / best practices
app.use(express.json({ limit: LISTEN_DATA_LIMIT }))
// data from url
app.use(express.urlencoded({ extended: true, limit: LISTEN_DATA_LIMIT }))

app.use(express.static("public"))

// save secure cookies in browser
app.use(cookieParser())
    

export {app}