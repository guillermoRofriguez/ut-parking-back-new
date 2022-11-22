import express, { response } from 'express'
import * as service from './service'

async function insertNewKeyController(req: express.Request, res: express.Response) {
    try {
        const uid = req.body.uid;
        console.log('controller uid',uid);
        
        const response = await service.insertNewKey(uid)
        res.send({
            code:200,
            message: "Insert in collection",
            data: response
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function cantidadDeClavesDiariasController(req: express.Request, res: express.Response) {
    try {
        const responser = await service.cantidadDeClavesDiarias()
        res.send({
            code:200,
            message:'todos los lugares',
            data: responser
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function registerVehiculoController(req: express.Request, res: express.Response) {
    try {
        const vehiculo = req.body.vehiculo
        console.log(vehiculo);
        
        const response = await service.registerVehiculo(vehiculo)
        res.send({
            code:200,
            message: 'Se agrego el vehiculo',
            data: response
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function getClaveWhitIdController(req: express.Request, res: express.Response) {
    try {
        const uid = req.body.uid
        const reponse = await service.getClaveWhitId(uid)
        res.send({
            code: 200,
            message: 'Se encontro un clave',
            data: reponse
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function insertUSerController(req: express.Request, res: express.Response) {
    try {
        const uid = req.body.uid;
        const userInfo = req.body.userInfo
        console.log('uid controller',uid);
        console.log('userInfo Controller', userInfo);
        const response = await service.insertUSer(uid, userInfo);
        res.send({
            conde: 200,
            message:'Se agrego un usuario a la clave',
            data:response
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

export{
    insertNewKeyController,
    cantidadDeClavesDiariasController,
    registerVehiculoController,
    getClaveWhitIdController,
    insertUSerController
}