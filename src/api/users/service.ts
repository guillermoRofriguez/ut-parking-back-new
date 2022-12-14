import * as firebase from "../database/firebase";
const auth = firebase.auth();
import { connect, getMongoId } from "../database/mongo";
import { UserRegular } from "./model";

async function createUser(data:any) {
    // console.log(data);
    
    try {
        const res = await auth.createUser({
            email: data.user.email,
            password: data.user.password,
        })
        return res
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function createRegularUser(form: UserRegular) {
    try {
        console.log("form",form);
        
        let newUSer = {
            name: form.name,
            matricula: form.matricula,
            email: form.email,
            password: form.password,
            createAt: new Date().toLocaleDateString()
        }
        // console.log("new",newUSer);
        
        const connection = await connect();
        const dbCollection = await connection.collection("users")
        let user = await dbCollection.insertOne(newUSer)
        return user.insertedId
    } catch (error) {
        console.log(error);
        throw error
    }
}

async function getAllUSers() {
    try {
        const conn = await connect();
        const dbCollection = await conn.collection("users");
        let newArray = await(await dbCollection.find()).toArray()
        return newArray
    } catch (error) {
        console.log(error);
        throw error
    }
}

export {
    createUser,
    createRegularUser,
    getAllUSers
}

