import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyC3dFJufWw63DuSw436EUJ-0gJsTRixrTc",
    authDomain: "shibable-4c1c0.firebaseapp.com",
    databaseURL: "https://shibable-4c1c0.firebaseio.com",
    projectId: "shibable-4c1c0",
    storageBucket: "shibable-4c1c0.appspot.com",
    messagingSenderId: "587941979195",
    appId: "1:587941979195:web:35eab803daa68608f1281e",
    measurementId: "G-47C88SF42T"
}

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const serverTimeStamp = () => firebase.firestore.FieldValue.serverTimestamp()