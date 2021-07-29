import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCeYyIhGAe3w0pbPjMACYANwc3d2tb8gSY",
    authDomain: "linkedinclone-c1d00.firebaseapp.com",
    projectId: "linkedinclone-c1d00",
    storageBucket: "linkedinclone-c1d00.appspot.com",
    messagingSenderId: "283284277889",
    appId: "1:283284277889:web:3ff6198aab703c6f6f9b80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };