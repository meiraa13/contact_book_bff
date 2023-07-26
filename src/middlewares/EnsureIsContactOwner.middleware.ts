import { NextFunction, Request, Response } from "express"
import { contactRepository } from "../data-source"

const ensureIsContactOwnerMW = async (req: Request, res: Response, next: NextFunction) => {
    const contactId:number = Number(req.params.id)
    const userId:number = (res.locals.token.id)

    const contact = await contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            user: true
        }
    })

    if (!contact) {
        return res.status(404).json({
            message: "contact not found"
        })
    }

    if (contact?.user.id != userId) {
        return res.status(403).json({
            message: "You dont`t have permissions"
        })
    }

    return next()
}

export {ensureIsContactOwnerMW }

