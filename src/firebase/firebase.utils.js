import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyCug3O1XDjWKnm_P0ah7v0tLU0LpkkXHrU",
    authDomain: "crwn-db-d7b23.firebaseapp.com",
    databaseURL: "https://crwn-db-d7b23.firebaseio.com",
    projectId: "crwn-db-d7b23",
    storageBucket: "crwn-db-d7b23.appspot.com",
    messagingSenderId: "213135772475",
    appId: "1:213135772475:web:817117e6e8945ba4bb451e",
    measurementId: "G-FCKQ2E5J8C"
}

export const createUserProfileDocument = async(userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore = firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle=()=>auth.signInWithPopup(provider)

export default firebase