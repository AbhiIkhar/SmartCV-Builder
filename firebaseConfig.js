/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// const FIREBASE_KEY = import.meta.env.FIREBASE_API_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "smartcv-builder-e7239.firebaseapp.com",
  projectId: "smartcv-builder-e7239",
  storageBucket: "smartcv-builder-e7239.appspot.com",
  messagingSenderId: "40126567536",
  appId: "1:40126567536:web:838caf6b3f3a7154acd0b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
