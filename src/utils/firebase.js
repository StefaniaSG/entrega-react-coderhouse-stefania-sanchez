import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBo7TIKM6KYtpGKp3BZt9JeIJgpGNIUbpE",
  authDomain: "react-store-coderhouse.firebaseapp.com",
  projectId: "react-store-coderhouse",
  storageBucket: "react-store-coderhouse.appspot.com",
  messagingSenderId: "331035312974",
  appId: "1:331035312974:web:02d4b7451659adb45d941f",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
