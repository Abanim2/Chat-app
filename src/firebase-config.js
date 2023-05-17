// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCF4-PRLLFCmcitBXU-mNgthnAI4UA0ZnY",
    authDomain: "chat-app-76c87.firebaseapp.com",
    projectId: "chat-app-76c87",
    storageBucket: "chat-app-76c87.appspot.com",
    messagingSenderId: "43131054464",
    appId: "1:43131054464:web:3130109bfcfe9e8c9cb965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();