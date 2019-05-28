/* eslint-disable no-console */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/messaging'

if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.fbAPIkey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
  }
  // INITIALIZE FIREBASE SDK
  firebase.initializeApp(config)
  // SETUP FIREBASE AUTHENTICATION DEFAULT LANGUAGE
  firebase.auth().languagueCode = 'es'
}

// EXPORT RELEVANT INSTANCES
export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
