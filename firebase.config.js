import {  initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC1XsbIANvrx-gVl-GmhaccOf0uf26s4-I",
    authDomain: "firestoredatabase-9341b.firebaseapp.com",
    projectId: "firestoredatabase-9341b",
    storageBucket: "firestoredatabase-9341b.appspot.com",
    messagingSenderId: "707812681052",
    appId: "1:707812681052:web:d096c2e9390bddf1410d99",
    measurementId: "G-HSLFYT3QMK"
  };

  const app = initializeApp(firebaseConfig);

  export const  db = getFirestore(app);