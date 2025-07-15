import mongoose from "mongoose";



//mongoose schema for user
export const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    totalPoints: { type: Number, default: 0 },
    history: { type: [String], default: [] },
    claims: {type: Number, default: 0}
})

