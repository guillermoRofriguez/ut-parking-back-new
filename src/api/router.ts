import express from 'express'
import * as UsersController from './users/controller'
const router = express.Router()

///USERS
router.post('/create-user', UsersController.createUSerController)
router.post('/create-regular-user', UsersController.createRegularUSerController)
router.get('/all-users', UsersController.getAllUSersController)
export { router };
