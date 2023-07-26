import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"
import { TUserResponse } from "../../interfaces/user.interfaces"
import { userResponseSchema } from "../../schemas/user.schemas"


const findOneUserService =async (userId:number):Promise<TUserResponse> => {
    const user: User | null = await userRepository.findOne({
        where:{
            id:userId
        }
    })

    const userResponse:TUserResponse = userResponseSchema.parse(user)

    return userResponse
}

export { findOneUserService }