import { contactRepository } from "../../data-source"
import { AppError } from "../../error"

const deleteContactService =async (contactId:number) => {
    const contact = await contactRepository.findOne({
        where:{
            id:contactId
        }
    })

    if(!contact){
        throw new AppError('contact not found', 404)
    }

    await contactRepository.remove(contact)
    
}

export { deleteContactService }