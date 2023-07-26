import { z } from "zod"
import { contactRequestSchema, contactSchema, contactUpdateSchema } from "../schemas/contacts.schemas"
import { DeepPartial } from "typeorm"

type TContact = z.infer<typeof contactSchema>
type TContactRequest = z.infer<typeof contactRequestSchema>
type TContactUpdate = DeepPartial<typeof contactUpdateSchema>


export { TContact, TContactRequest, TContactUpdate }