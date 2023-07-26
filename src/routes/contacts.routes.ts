import { Router } from "express";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { contactRequestSchema, contactUpdateSchema } from "../schemas/contacts.schemas";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { createContactController, deleteContactController, findContactsController, updateContactController } from "../controllers/contacts.controllers";
import { ensureIsContactOwnerMW } from "../middlewares/EnsureIsContactOwner.middleware";

const contactRoutes: Router = Router()


contactRoutes.post('',ensureTokenIsValidMW, ensureBodyIsValidMW(contactRequestSchema), createContactController )
contactRoutes.get('', ensureTokenIsValidMW, findContactsController)
contactRoutes.patch('/:id', ensureTokenIsValidMW, ensureIsContactOwnerMW, ensureBodyIsValidMW(contactUpdateSchema), updateContactController)
contactRoutes.delete('/:id',ensureTokenIsValidMW, ensureIsContactOwnerMW, deleteContactController)


export default contactRoutes 