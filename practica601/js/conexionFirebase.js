"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMxin27Wck_WV_H-RMXLy66yipuD5WhY",
  authDomain: "practica601-509a9.firebaseapp.com",
  projectId: "practica601-509a9",
  storageBucket: "practica601-509a9.appspot.com",
  messagingSenderId: "70104120655",
  appId: "1:70104120655:web:c8717fb6e2bcd4ab1d993a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };