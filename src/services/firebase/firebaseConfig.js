// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //apiKey: "AIzaSyDOPpp8cGqE4EnXD_8maM5RimJ8of9he5A",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "neoclase13.firebaseapp.com",
  projectId: "neoclase13",
  storageBucket: "neoclase13.appspot.com",
  messagingSenderId: "1096353532110",
  appId: "1:1096353532110:web:3c85cba8c8e5748742689f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();