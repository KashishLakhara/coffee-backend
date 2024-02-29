// require("dotenv").config();  // makes code inconsistent
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: '.env'
});

connectDB();

