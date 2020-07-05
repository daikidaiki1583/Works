import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyDGduFr2eQvoy_qbRyV2ILEGiePwpcd67o",
    authDomain: "chat-6b292.firebaseapp.com",
    databaseURL: "https://chat-6b292.firebaseio.com",
    projectId: "chat-6b292",
    storageBucket: "chat-6b292.appspot.com",
    messagingSenderId: "153364383188",
    appId: "1:153364383188:web:476063897e874c1c138241",
    measurementId: "G-9Y9RVJT7F1"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()
export const serverTimeStamp =  () =>firebase.firestore.FieldValue.serverTimestamp()
                               