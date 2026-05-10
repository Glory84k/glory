import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkS91W-We7ANU0ZVJp-pU-9lcwJuQJo84",
  authDomain: "glory-cf68b.firebaseapp.com",
  databaseURL: "https://glory-cf68b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "glory-cf68b",
  storageBucket: "glory-cf68b.firebasestorage.app",
  messagingSenderId: "603545583095",
  appId: "1:603545583095:web:cd84dd077a7f82ef9182f2",
  measurementId: "G-EPDXFSH8B6"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase connecté");