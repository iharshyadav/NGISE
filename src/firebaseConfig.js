// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXXbLOt6hf0zGjsOasWOhRS-dT0-VIfJk",
  authDomain: "ngise-8b894.firebaseapp.com",
  projectId: "ngise-8b894",
  storageBucket: "ngise-8b894.firebasestorage.app",
  messagingSenderId: "247734192151",
  appId: "1:247734192151:web:28df98559f4b6eb45c7452",
  measurementId: "G-DS94P82SKF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
