import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRciyApDBmaT7w1aLCA4sFFRWqoDLu83I",
  authDomain: "clone-d2c7f.firebaseapp.com",
  projectId: "clone-d2c7f",
  storageBucket: "clone-d2c7f.appspot.com",
  messagingSenderId: "854243304408",
  appId: "1:854243304408:web:c407665772312d0959c8ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Corrected Firestore initialization
