import { NextFunction, Request, Response } from "express"
import { AppError } from "../error"

const ensureIsOwnerMW = (req:Request, res:Response, next:NextFunction) =>{
    const tokenId:number = Number(res.locals.token.id)
    const id:number = Number(req.params.id)

    if(tokenId !== id){
        throw new AppError('Insufficient permission', 403)
    }

    next()
}

export { ensureIsOwnerMW }