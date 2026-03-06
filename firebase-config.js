// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6sTFxBOXRzZ2nMXhm_XMOxVnFcdUncGM",
  authDomain: "sagra-strozzaprete2026.firebaseapp.com",
  projectId: "sagra-strozzaprete2026",
  storageBucket: "sagra-strozzaprete2026.firebasestorage.app",
  messagingSenderId: "711270004618",
  appId: "1:711270004618:web:86c8b4f0b54105a41a7a73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();

// Per debug - controlla che sia caricato
console.log('Firebase inizializzato in firebase-config.js');
console.log('db disponibile:', typeof db !== 'undefined');