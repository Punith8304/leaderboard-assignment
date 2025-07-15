import express from "express";
import { getRankListIds, updateScore, getLeaderboard } from "../controllers/leaderboardController.js";



const router = express.Router()



//routes for getting leader board details also included updating score route
router.post("/update-score", updateScore)
router.get("/get-leaderboard", getLeaderboard)
export default router