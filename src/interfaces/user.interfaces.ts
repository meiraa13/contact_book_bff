import { z } from 'zod'
import { DeepPartial } from 'typeorm'
import { userRequestSchema, userResponse2Schema, userResponseSchema, userSchema, userUpdateSchema } from '../schemas/user.schemas'

type TUser = z.infer<typeof userSchema>
type TUserRequest = z.infer<typeof userRequestSchema>
type TUserResponse = z.infer<typeof userResponseSchema>
type TUserUpdate = DeepPartial<typeof userUpdateSchema>
type TUserContactResponse = z.infer<typeof userResponse2Schema>

export { TUser, TUserRequest, TUserResponse, TUserUpdate, TUserContactResponse }