import express from "express"
import { addUser, getAllUsers, getUserHistory } from "../controllers/userController.js"

const router = express.Router()


//routes for user controller like adding users, getting history, getting users
router.get("/get-all-users", getAllUsers)
router.post("/add-new-user", addUser)
router.post("/get-user-history", getUserHistory)

export default router