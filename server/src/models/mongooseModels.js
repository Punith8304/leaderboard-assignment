import * as schemas from "../schemas/mongooseSchema.js"
import mongoose from "mongoose"




//mongoose model for users
export const userModel = mongoose.model("users", schemas.userSchema)
