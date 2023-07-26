import { z } from 'zod'
import { contactSchema } from './contacts.schemas'

const userSchema = z.object({
    id: z.number(),
    fullname: z.string(),
    nickname: z.string(),
    email: z.string().email(),
    password: z.string(),
    phoneNumber: z.string().length(11),
    createdAt: z.string(),
    updatedAt: z.string()
})

const userRequestSchema = userSchema.omit({
    id: true,
    createdAt:true,
    updatedAt:true
})

const userResponseSchema = userSchema.omit({
    password:true
})

const userResponse2Schema = userSchema.omit({
    password:true
}).extend({
    contacts:contactSchema.array()
})

const userUpdateSchema = userRequestSchema.partial()

export { userSchema, userRequestSchema, userResponseSchema, userUpdateSchema, userResponse2Schema }