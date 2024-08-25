// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTHdsH95eBJwsLO26BA21QOi2s1epJ768",
  authDomain: "facebook-d826f.firebaseapp.com",
  projectId: "facebook-d826f",
  storageBucket: "facebook-d826f.appspot.com",
  messagingSenderId: "538093553222",
  appId: "1:538093553222:web:94bab571e511bbdf03ac47",
  measurementId: "G-05ENQF4P7Q"
};

// Initialize Firebase
   const app = initializeApp(firebaseConfig);
  const auth =getAuth(app)
export {auth}