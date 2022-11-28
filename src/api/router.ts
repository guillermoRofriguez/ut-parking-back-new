import express from 'express'
import * as UsersController from './users/controller'
import * as SpaceController from './key/controller'
const router = express.Router()

///USERS
router.post('/create-user', UsersController.createUSerController);
router.post('/create-regular-user', UsersController.createRegularUSerController);
router.get('/all-users', UsersController.getAllUSersController);
router.post('/user/info-user', UsersController.getUSerInfoController);



//ESTACIONAMIENTO
router.post('/estacionamiento/insert-new-key', SpaceController.insertNewKeyController);
router.get('/estacionamiento/getall', SpaceController.cantidadDeClavesDiariasController);
router.post('/register/vehiculo', SpaceController.registerVehiculoController);
router.post('/key/clave-send', SpaceController.getClaveWhitIdController);
router.post('/key/inser-user', SpaceController.insertUSerController);
router.post('/key/get-clave-id-user', SpaceController.getClaveToUSerController);
router.post('/key/liberar-estacionameinto', SpaceController.liberarSpacioController);
router.post('/key/veiculos-user', SpaceController.allVehiculosUserController);
export { router };



