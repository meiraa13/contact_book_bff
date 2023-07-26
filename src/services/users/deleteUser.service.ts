import { userRepository } from "../../data-source"
import User from "../../entities/user.entity"

const deleteUserService = async (userId:number) =>{
    const user: User | null = await userRepository.findOneBy({
        id:userId
    })

    await userRepository.remove(user!)

}


export { deleteUserService }