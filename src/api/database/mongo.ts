import {Db, ObjectID} from "mongodb"
const {MongoClient} = require("mongodb")

const url = process.env.DB_URI

const client = new MongoClient(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let connection: Db

async function connect() {
    try {
        if(!connection){
            await client.connect();
            connection = client.db("ut-parking-database")
            return connection
        }
        return connection
    } catch (error) {
        console.log(error);
        throw error
    }
}

function getMongoId(document: string){
    try {
        return new ObjectID(document)
    } catch (error) {
        console.log(error);
        throw error
    }
}

// const dbConnect = () => {
//     const DB_URI = process.env.DB_URI;

//     MongoClient.connect(DB_URI,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     },(err, res)=>{
//         if(!err){
//             console.log("CONEXION CORRECTA");
            
//         }
//         else{
//             console.log("ERROR DE CONEXION");
            
//         }
//     })
// }

export {
    // dbConnect
    connect,
    getMongoId
}
