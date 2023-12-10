// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmiFTbOYfhH1k86hefsqgB5ykEvf-3BrM",
  authDomain: "testproject-10173.firebaseapp.com",
  projectId: "testproject-10173",
  storageBucket: "testproject-10173.appspot.com",
  messagingSenderId: "743106200606",
  appId: "1:743106200606:web:b45a8314e1f35bd28b9a0f",
  databaseURL:
    "https://testproject-10173-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
