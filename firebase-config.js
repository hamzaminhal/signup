// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF4pRfUuU_eV3WpDLsivUm6nRQnWfGAsg",
  authDomain: "react-signup-cb819.firebaseapp.com",
  projectId: "react-signup-cb819",
  storageBucket: "react-signup-cb819.firebasestorage.app",
  messagingSenderId: "114637209277",
  appId: "1:114637209277:web:9f45351a9df1eb74cf81d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export{app, auth}