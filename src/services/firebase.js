
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, EmailAuthCredential } from "firebase/auth";


const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,

    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,

    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_FIREBASE_APPID

};



const app = initializeApp(firebaseConfig)
const auth = getAuth(app)



const validatePassword = (password, confirmPassword) => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
        if (password !== confirmPassword) {
            isValid = false
        }
    }
    return isValid
}


export { auth, validatePassword }
