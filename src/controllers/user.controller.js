import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
    // code for registering user

    res.status(200).json({
        message: "ok"
    })
})

export { registerUser }