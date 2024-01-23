// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTFb95s86_P-RNUpcZ96zvQh183jdTjJI",
  authDomain: "dino-tienda.firebaseapp.com",
  projectId: "dino-tienda",
  storageBucket: "dino-tienda.appspot.com",
  messagingSenderId: "726618074546",
  appId: "1:726618074546:web:d96d2750d2b772f51888ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)