import { Request, Response } from "express"
import { TContact, TContactRequest } from "../interfaces/contacts.interfaces"
import { createContactService } from "../services/contacts/createContact.service"
import Contact from "../entities/contact.entity"
import { findContactsService } from "../services/contacts/findContacts.service"
import { updateContactService } from "../services/contacts/updateContact.service"
import { deleteContactService } from "../services/contacts/deleteContact.service"

const createContactController =async (req:Request, res:Response):Promise<Response> => {
    const userId:number = Number(res.locals.token.id)

    const newContact:TContact = await createContactService(req.body, userId)

    return res.status(201).json(newContact)
    
}

const findContactsController =async (req:Request, res:Response):Promise<Response> => {
    const userId:number = Number(res.locals.token.id)

    const contacts = await findContactsService(userId)

    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId: number = Number(req.params.id)

    const updatedContact = await updateContactService(req.body, contactId)
    return res.json(updatedContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId:number = Number(req.params.id)

    await deleteContactService(contactId)
    res.status(204).send()
}


export { createContactController, findContactsController, updateContactController, deleteContactController }