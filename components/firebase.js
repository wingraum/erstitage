// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj-PDqTaXsX5QcK5rsnAM9vrLfZZ74tDs",
  authDomain: "erstitage.firebaseapp.com",
  projectId: "erstitage",
  storageBucket: "erstitage.appspot.com",
  messagingSenderId: "411628461864",
  appId: "1:411628461864:web:8bca89a2fe4a32423afa1d",
  measurementId: "G-2JKZ70B8JB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);