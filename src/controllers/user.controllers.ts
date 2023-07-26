import { Request, Response } from "express"
import { TUserRequest, TUserResponse, TUserUpdate } from "../interfaces/user.interfaces"
import { createUserService } from "../services/users/createUser.service"
import { findOneUserService } from "../services/users/findOneUser.service"
import { updateUserService } from "../services/users/updateUser.service"
import { deleteUserService } from "../services/users/deleteUser.service"


const createUserController =async (req:Request, res:Response):Promise<Response> => {
    const userData:TUserRequest = req.body

    const newUser:TUserResponse = await createUserService(userData)

    return res.status(201).json(newUser)
    
}

const findOneUserController =async (req:Request, res:Response):Promise<Response> => {
    const userId:number = Number(req.params.id)

    const foundUser: TUserResponse = await findOneUserService(userId)

    return res.json(foundUser)
}

const updateUserController =async (req:Request, res:Response):Promise<Response> => {
    const userId:number = Number(req.params.id)
    const userData:TUserUpdate = req.body

    const updatedUser = await updateUserService(userId, userData)

    return res.json(updatedUser)
    
}

const deleteUserController = async(req:Request, res:Response):Promise<Response> =>{
    const userId:number = Number(req.params.id)

    await deleteUserService(userId)

    return res.status(204).send()
}

export { createUserController, findOneUserController, updateUserController, deleteUserController }