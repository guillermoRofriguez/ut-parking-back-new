import { connect } from "../database/mongo";
import { KeyGenerate } from "./model";


async function insertNewKey(uid: any) {
    try {
        let date = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Mexico_City' }));
        const connection = await connect();
        const dbCollection = await connection.collection('estacionamiento');
        const otterDb = await connection.collection('estacionamientoHistorico');
        let response: KeyGenerate = {
            uid: uid,
            create_at: date
        }

       await dbCollection.insertOne(response)
       await otterDb.insertOne(response)       
    }
    catch(error){
        
        console.log(error);
         throw error
    }
}

async function cantidadDeClavesDiarias() {
    try {
        const connection = await connect();
        const dbCollection = await connection.collection('estacionamiento')
        let response =await( await dbCollection.find()).toArray()
        if(response.length == 0){
            return []
        }
    
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}


export{
    insertNewKey,
    cantidadDeClavesDiarias
}