import express, { urlencoded } from "express"
import mongoose from "mongoose"
import userDetails from "./routes/userDetails.js"
import leaderBoardDetails from "./routes/leaderboardDetails.js"
import cors from "cors"

import connectDB from "./config/mongooseConfig.js"




connectDB().catch(error => {
    console.log(error)
});

const app = express()


//cors for allowing cross origin requests
app.use(cors()) 

//express.json for accessing data from body
app.use(express.json())
app.use(express.urlencoded({extended: true}))


//initial routes for users and leaderboard paths
app.use("/users", userDetails)
app.use("/leaderboard", leaderBoardDetails)




//running server on port: 8000

app.listen(8000, (req,res)=>{
    console.log("server running on port 8000")
})