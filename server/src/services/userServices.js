import { model } from "mongoose";
import * as models from "../models/mongooseModels.js"



//user adding to db service
export const addUserService = async (userDetails) => {
    try {
        const user = new models.userModel(userDetails)
        await user.save()
        const users = await models.userModel.find();
        return { status: 200, added: true, users: users }
    } catch (error) {
        console.log(error)
        return { status: 200, added: false }
    }
}


//adding default users to db if less than 10 users are found by deleting all the users and adding new ten users
export const addDefaultUsers = async () => {
    try {
        const users = [
            { name: "Punith" },
            { name: "Dayakar" },
            { name: "Lokesh" },
            { name: "Radhika" },
            { name: "Suresh" },
            { name: "Likhitha" },
            { name: "Obul" },
            { name: "Hari" },
            { name: "Kumar" },
            { name: "Masthan" }
        ]
        await models.userModel.insertMany(users)
        return { status: 200, added: true, users: await models.userModel.find() }
    } catch (error) {
        console.log(error)
        return error
    }
}



//getting all users details
export const getAllUsersDetails = async () => {
    const result = await models.userModel.find()
    return { status: 200, users: result }
}



//checking user existence return true if exists else false
export const checkUserExists = async (name) => {
    try {
        const userExits = await models.userModel.find({ name: name })
        return userExits.length !== 0
    } catch (error) {
        return error
    }
}



//getting history of the user claims

export const getHistory = async (id) => {
    try {
        console.log(id)
        const history = await models.userModel.find({_id: id}, {history: 1, _id: 0})
        return {history: history[0]}
    } catch (error) {
        console.log(error)
    }
}

