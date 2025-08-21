// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvIyO-F6WExkv7hBjbXubm3PBJt_rPKS4",
    authDomain: "to-11-3fa9e.firebaseapp.com",
    projectId: "to-11-3fa9e",
    storageBucket: "to-11-3fa9e.firebasestorage.app",
    messagingSenderId: "508641813769",
    appId: "1:508641813769:web:677fc3a425bd46813a1fd8",
    measurementId: "G-ZPVNQMY4YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db=getFirestore()