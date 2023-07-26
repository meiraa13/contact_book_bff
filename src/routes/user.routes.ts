import { Router } from "express";
import { ensureBodyIsValidMW } from "../middlewares/ensureBodyIsValid.middleware";
import { userRequestSchema, userUpdateSchema } from "../schemas/user.schemas";
import { ensureEmailExistsMW } from "../middlewares/ensureEmailExists.middleware";
import { createUserController, deleteUserController, findOneUserController, updateUserController } from "../controllers/user.controllers";
import { ensureIdExistsMW } from "../middlewares/ensureIdExists.middleware";
import { ensureTokenIsValidMW } from "../middlewares/ensureTokenIsValid.middleware";
import { ensureIsOwnerMW } from "../middlewares/ensureIsOwner.middleware";


const userRoutes: Router = Router()

userRoutes.post('', ensureBodyIsValidMW(userRequestSchema), ensureEmailExistsMW, createUserController)
userRoutes.get('/:id',ensureTokenIsValidMW,ensureIsOwnerMW, ensureIdExistsMW, findOneUserController)
userRoutes.patch('/:id', ensureTokenIsValidMW, ensureIsOwnerMW, ensureIdExistsMW, ensureBodyIsValidMW(userUpdateSchema), updateUserController)
userRoutes.delete('/:id', ensureTokenIsValidMW, ensureIsOwnerMW, ensureIdExistsMW, deleteUserController)

export default userRoutes