import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCj9UX2q8fIoKLAUnm6kWhICZkwmSGVMuk",
  authDomain: "clone-c8463.firebaseapp.com",
  databaseURL: "https://clone-c8463.firebaseio.com",
  projectId: "clone-c8463",
  storageBucket: "clone-c8463.appspot.com",
  messagingSenderId: "340144409384",
  appId: "1:340144409384:web:dea88dee90d26afd94de1d",
  measurementId: "G-6QVBCMTV9S"
})

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {auth,db};