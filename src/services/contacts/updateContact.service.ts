import { contactRepository } from "../../data-source"
import { AppError } from "../../error"
import { TContactUpdate } from "../../interfaces/contacts.interfaces"
import { contactSchema } from "../../schemas/contacts.schemas"

const updateContactService =async (contactData:TContactUpdate, contactId:number) => {
    const contact = await contactRepository.findOne({
        where:{
            id:contactId
        }
    })

    if(!contact){
        throw new AppError('contact not found', 404)
    }

    const updatedContact = contactRepository.create({
        ...contact,
        ...contactData
    })
    await contactRepository.save(updatedContact)

    return contactSchema.parse(updatedContact)
}

export { updateContactService }