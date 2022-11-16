import express from 'express'
import * as UsersController from './users/controller'
import * as SpaceController from './key/controller'
const router = express.Router()

///USERS
router.post('/create-user', UsersController.createUSerController);
router.post('/create-regular-user', UsersController.createRegularUSerController);
router.get('/all-users', UsersController.getAllUSersController);


//ESTACIONAMIENTO
router.post('/estacionamiento/insert-new-key', SpaceController.insertNewKeyController);
router.get('/estacionamiento/getall', SpaceController.cantidadDeClavesDiariasController);
router.post('/register/vehiculo', SpaceController.registerVehiculoController)
export { router };



