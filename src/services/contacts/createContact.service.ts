import { contactRepository, userRepository } from "../../data-source";
import Contact from "../../entities/contact.entity";
import User from "../../entities/user.entity";
import { AppError } from "../../error";
import { TContact, TContactRequest } from "../../interfaces/contacts.interfaces";
import {  contactSchema } from "../../schemas/contacts.schemas";


const createContactService =async (contactData:TContactRequest, userId:number):Promise<TContact> => {
    const user: User | null = await userRepository.findOne({
        where:{
            id:userId
        }
    })

    if(!user){
        throw new AppError('user not found', 404)
    }

    const contact: Contact = contactRepository.create({
        ...contactData,
        user
    })
    await contactRepository.save(contact)

    return contactSchema.parse(contact)
}

export {createContactService }