import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"
import { TUserResponse, TUserUpdate } from "../../interfaces/user.interfaces"
import { userResponseSchema } from "../../schemas/user.schemas"

const updateUserService = async (userId:number, userData:TUserUpdate):Promise<TUserResponse> =>{
    const currentUserData:User | null = await userRepository.findOneBy({
        id:userId
    })
    
    const newUserData: User = userRepository.create({
        ...currentUserData,
        ...userData
    })

    await userRepository.save(newUserData)
    const userResponse:TUserResponse = userResponseSchema.parse(newUserData)

    return userResponse

}

export { updateUserService }