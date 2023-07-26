import { NextFunction, Request, Response } from "express"
import { AppDataSource } from "../data-source"
import User from "../entities/user.entity"
import { AppError } from "../error"
import { TUserRequest } from "../interfaces/user.interfaces"
import {Repository} from 'typeorm'

const ensureEmailExistsMW = async (req:Request, res:Response, next: NextFunction):Promise<Response | void > => {
    const userData:TUserRequest = req.body
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOne({
        where:{
            email: userData.email
        }
    })

    if(user?.email === userData.email){
        throw new AppError('Email already exists', 409)
    }

    return next()
}

export { ensureEmailExistsMW }