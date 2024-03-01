// require("dotenv").config();  // makes code inconsistent
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: '.env'
});

connectDB()
.then(() => {

    app.on("error", (err) => {
        console.log("Server Crashed!!", err);
        throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on PORT: ${process.env.PORT || 8000}`);
    });
})
.catch((err) => {
    console.log("MONGODB connection FAILED!!"), err;
})

