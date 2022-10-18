import * as admin from "firebase-admin"

const serviceaccount = process.env.GOOGLE_APPLICATION_CREDENTIALS as string ;
const bucket = process.env.STORAGE_BUCKET;

admin.initializeApp({
    credential: admin.credential.cert(serviceaccount)
});

function adminitrator(){
    try {
        return admin;
    } catch (error) {
        throw error;
    }
}

function firestore() {
    try {
        return admin.firestore();
    } catch (error) {
        throw error;
    }
}

function auth() {
    try {
        return admin.auth();
    } catch (error) {
        throw error;
    }
}

function storage() {
    try {
        return admin.storage().bucket(bucket);
    } catch (error) {
        throw error;
    }
}

function messaging() {
    return admin.messaging();
}
export{
    firestore,
    auth,
    storage,
    adminitrator,
    messaging
}