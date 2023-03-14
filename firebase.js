import * as firebase from 'firebase'

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDy1rcLx34B-ccvSEneKAbkNOn9_6HdBpY",
  authDomain: "react-native-expense-tracker.firebaseapp.com",
  projectId: "react-native-expense-tracker",
  storageBucket: "react-native-expense-tracker.appspot.com",
  messagingSenderId: "672812392418",
  appId: "1:672812392418:web:22076f355f89d97afbe3bb",
  measurementId: "G-YEFKMWSBY5"
};

let app
if ((firebase.apps.length === 0)) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = app.firestore()

export {auth, db}
