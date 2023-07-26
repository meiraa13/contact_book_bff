import { z } from "zod"

const contactSchema = z.object({
    id: z.number(),
    fullname: z.string(),
    email: z.string().email(),
    phoneNumber: z.string().length(11),
    createdAt: z.string(),
    updatedAt: z.string(),
})

const contactRequestSchema = contactSchema.omit({
    id:true,
    createdAt:true,
    updatedAt:true,
})

const contactUpdateSchema = contactRequestSchema.partial()




export { contactSchema, contactRequestSchema, contactUpdateSchema }