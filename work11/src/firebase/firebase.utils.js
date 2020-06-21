import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyDEfZRA8tZYwFkLXmQcAV9MVo3nuKNq1UM",
    authDomain: "image-text-f453f.firebaseapp.com",
    databaseURL: "https://image-text-f453f.firebaseio.com",
    projectId: "image-text-f453f",
    // storageBucket: "image-text-f453f.appspot.com",
    messagingSenderId: "994291943057",
    appId: "1:994291943057:web:ee12d8dcf866c0d851a130",
    measurementId: "G-16YQ2GKYCS",
    storageBucket:"gs://image-text-f453f.appspot.com"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()   

