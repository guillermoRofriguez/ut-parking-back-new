import * as service from "./service";
import express, { response } from "express";

async function createUSerController(req: express.Request, res: express.Response) {
    try {
        let response = req.body || null
        console.log(response);
        
        const data = await service.createUser(response)
        res.send({
            code: 200,
            message:"Useiaro Creado",
            data: data
        })
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function createRegularUSerController(req: express.Request, res: express.Response) {
    try {
        const form = req.body
        let response = await service.createRegularUser(form)

        res.send({
            code: 200,
            message:"New user",
            data:response
        })
    } catch (error) {
        console.log(error);
        throw error
        
    }
}


async function getAllUSersController(req: express.Request, res: express.Response) {
    try {
        // const allUser = req.body
        const response = await service.getAllUSers()
        res.send({
            code: 200,
            message: "All users",
            data: response
        })        
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {
    createUSerController,
    createRegularUSerController,
    getAllUSersController
}