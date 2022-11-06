import express from 'express'
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

export{
    insertNewKeyController,
    cantidadDeClavesDiariasController
}