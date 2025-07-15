import express, { urlencoded } from "express"
import mongoose from "mongoose"
import userDetails from "./routes/userDetails.js"
import leaderBoardDetails from "./routes/leaderboardDetails.js"
import cors from "cors"
import { MongoClient, ServerApiVersion } from "mongodb"

import connectDB from "./config/mongooseConfig.js"




connectDB().catch(error => {
    console.log(error)
});

const app = express()

// const uri = "mongodb+srv://u@cluster0.e4beern.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } catch (error) {
//     console.log(error)
//   }
// //   finally {
// //     // Ensures that the client will close when you finish/error
// //     await client.close();
// //   }
// }
// run().catch(console.dir);


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