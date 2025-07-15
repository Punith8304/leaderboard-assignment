import * as models from "../models/mongooseModels.js"
import * as leaderboardServices from "../services/leaderboardServices.js"


//leaderboard controller
//function for updating score and exporting it to use outside

export const updateScore = async (req, res) => {
    try {
        const scoreUpdateDetails = req.body
        const result = await leaderboardServices.updateScoreService(scoreUpdateDetails)
        if (result.update) {
            const updateLeaderBoard = await leaderboardServices.leaderBoard()
            console.log(updateLeaderBoard)
            res.send({leaderBoard: updateLeaderBoard.updatedBoard, status: true})
        } else {
            res.send({status: false})
        }
    } catch (error) {
        console.log(error)
        res.send({error: error, status: false})
    }
}

//function for getting leader board 
export const getLeaderboard = async (req, res) => {
    try {
        const leaderBoard = await leaderboardServices.leaderBoard()
        res.send({leaderBoard: leaderBoard.updatedBoard, status: true})
    } catch (error) {
        console.log(error)
        res.send({error: error, status: false})
    }
}
