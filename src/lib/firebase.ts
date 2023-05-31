import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.FIRESTORE_APIKEY,
    authDomain: import.meta.env.FIRESTORE_AUTHDOMAIN,
    projectId: import.meta.env.FIRESTORE_PROJECTID,
    storageBucket: import.meta.env.FIRESTORE_STOREBUCKET,
    messagingSenderId: import.meta.env.FIRESTORE_MESSAGINGSENDERID,
    appId: import.meta.env.FIRESTORE_FIRESTORE_APPID,
    measurementId: import.meta.env.MEASUREMENTID
}

const app = firebase.initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore

export { collection, getDocs, query, where }