import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"
import { AppError } from "../../error"
import { TUserContactResponse } from "../../interfaces/user.interfaces"
import { userResponse2Schema } from "../../schemas/user.schemas"


const findContactsService = async (userId:number):Promise<TUserContactResponse> => {
    const user: User | null = await userRepository.findOne({
        where:{
            id:userId
        },
        relations:{
            contacts:true
        }
    })
    
    if(!user){
        throw new AppError('user not found', 404)
    }
    


    return userResponse2Schema.parse(user)

}

export { findContactsService }