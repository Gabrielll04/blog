import * as firebase from "firebase/app"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
    authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIRESTORE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIRESTORE_STOREBUCKET,
    messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIRESTORE_APPID,
    measurementId: import.meta.env.VITE_FIRESTORE_MEASUREMENTID
}

const app = firebase.initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export default firestore

export { collection, getDocs, query, where }