import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBY1o_6zq3YtxbFOyE8tmKxdsm07RbkqNI",
    authDomain: "react-app-curso-9fe6a.firebaseapp.com",
    projectId: "react-app-curso-9fe6a",
    storageBucket: "react-app-curso-9fe6a.appspot.com",
    messagingSenderId: "35896305819",
    appId: "1:35896305819:web:96def1cbf20dae292abe3e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
