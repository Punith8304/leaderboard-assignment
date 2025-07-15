import * as userServices from "../services/userServices.js"
import * as models from "../models/mongooseModels.js"



//user controller


//adding new user
export const addUser = async (req, res) => {
    try {
        
        //checking whether the new user username is already used
        if (await userServices.checkUserExists(req.body.name)) { 
            res.send({ userExists: true })
        } else {
            //creating new user if new username isn't a duplicate
            const addUserResult = await userServices.addUserService({ name: req.body.name })
            if (addUserResult.added) {
                res.send({ added: true, users: addUserResult.users, userExists: false })
            } else {
                res.send({ added: false, userExists: false })
            }
        }
    } catch (error) {
        console.log(error)
        res.send({ error: error, added: false })
    }
}



//getting all existing users

export const getAllUsers = async (req, res) => {
    try {
        if (await models.userModel.countDocuments() < 10) {
            await models.userModel.deleteMany({})
            const addDefaultUsers = await userServices.addDefaultUsers()
            res.send({ users: addDefaultUsers.users, success: true })
        } else {
            const getAllUsersResult = await userServices.getAllUsersDetails()
            res.send({ users: getAllUsersResult.users })
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


//getting user claim history

export const getUserHistory = async (req, res) => {
    try {
        const historyResult = await userServices.getHistory(req.body.id)
        res.send({historyResult: historyResult.history, status: true})
    } catch (error) {
        res.send({status: false})
    }
}

