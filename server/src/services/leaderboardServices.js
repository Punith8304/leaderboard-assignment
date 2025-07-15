import { model } from "mongoose"
import * as models from "../models/mongooseModels.js"


//services for updating score

export const updateScoreService = async (details) => {
    try {
        const scores = await models.userModel.find({ _id: details.id }, { totalPoints: 1, _id: 1, claims: 1, history: 1 })
        console.log(scores[0]._id)
        const currentScore = scores[0].totalPoints + Number(details.points)
        const currentClaims = scores[0].claims + 1;
        const currentHistory = scores[0].history
        await models.userModel.updateOne({ _id: details.id }, { $set: { totalPoints: currentScore, claims: currentClaims, history: [details.history, ...currentHistory] } })
        return {status: true, update: true}
    } catch (error) {
        console.log(error)
    }
}


// service for getting leaderboard
export const leaderBoard = async () => {
    try {
        const leaderBoardResult = await models.userModel.find({}, {_id: 1, name: 1, totalPoints: 1, claims: 1}).sort({totalPoints: -1})
        return {updatedBoard: leaderBoardResult}
    } catch (error) {
        console.log(error)
    }   
}