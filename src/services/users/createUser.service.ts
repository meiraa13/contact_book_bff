import { AppDataSource } from "../../data-source"
import User from "../../entities/user.entity"
import { TUserRequest, TUserResponse } from "../../interfaces/user.interfaces"
import { userResponseSchema } from "../../schemas/user.schemas"
import { Repository} from "typeorm"

const createUserService = async(userData:TUserRequest):Promise<TUserResponse> =>{
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const user:User = userRepository.create(userData)
    await userRepository.save(user)

    const userResponse:TUserResponse = userResponseSchema.parse(user)

    return userResponse
}

export { createUserService }