import { NextFunction, Request, Response } from "express"
import { userRepository } from "../data-source"
import User from "../entities/user.entity"
import { AppError } from "../error"

const ensureIdExistsMW = async (req:Request, res:Response, next: NextFunction):Promise<Response | void > => {
   const userId: number = Number(req.params.id)

    const user: User | null = await userRepository.findOne({
        where:{
            id: userId
        }
    })

    if(!user){
        throw new AppError('User not found', 404)
    }

    return next()
}

export { ensureIdExistsMW }