import { connect } from "../database/mongo";
import { KeyGenerate, Vehiculo } from "./model";


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

async function registerVehiculo(uid: string ,vehiculo:Vehiculo) {
    try {
          const {type, marca,modelo,placa}= vehiculo ;
        const connection = await connect();
        const dbResponse = await connection.collection('vehiculo');
        let sent:Vehiculo = {
            uid: uid,
            type: type,
            marca: marca,
            modelo:modelo,
            placa: placa
        }
         await dbResponse.insertOne(sent)
    } catch (error) {
        console.log(error);
        throw error
        
    }
}
async function getClaveWhitId(uid:string){
    try {
        const connection = await connect();
        const dbRef = connection.collection('estacionamiento');
        if(uid == ''){
            return 'No se encontro nada'
        }
        const response = await dbRef.findOne({uid: uid})
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function insertUSer(uid:string, infoUSer:any){
    try {
        const connection = await connect();
        const dbRef = connection.collection('estacionamiento');
        const insert = dbRef.updateOne(
            {uid:uid},
            {$set:{
                infoUSer: infoUSer,
                disponible: true,
                register: new Date()
            }}
        );
        return insert
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function getClaveToUSerId(uid:string) {
    try {
        const connectiion = await connect()
        const dbRef= connectiion.collection('estacionamiento')
        let res = await dbRef.find({'infoUSer.uid': uid}).toArray()
        // console.log(res);
        
        return res
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function liberarSpacio(uid:string) {
    try {
        const infoClave:any = await getClaveWhitId(uid)
        const connectiion = await connect()
        const dbRef= connectiion.collection('estacionamiento')
        console.log('info',infoClave);
        
        await dbRef.updateOne(
            {uid: uid},
            {
                $set:{
                    disponible:true,
                },
                $unset:{
                    infoUSer: "",
                    register: ""
                }
                
            }
            )
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function getVehiculoUser(uid:string) {
    try {
        const connectiion = await connect()
        const dbRef= connectiion.collection('estacionamiento')
        let response = await dbRef.find({uid:uid}).toArray()
        return response
    } catch (error) {
        console.log(error);
        throw error
    }
}


export{
    insertNewKey,
    cantidadDeClavesDiarias,
    registerVehiculo,
    getClaveWhitId,
    getClaveToUSerId,
    getVehiculoUser,
    liberarSpacio,
    insertUSer
}