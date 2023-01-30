// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAfgWbx8W6G_53l1dyXvs4BByhUOLpdbtY",
  authDomain: "rn-social-71d13.firebaseapp.com",
  projectId: "rn-social-71d13",
  storageBucket: "rn-social-71d13.appspot.com",
  messagingSenderId: "456743345573",
  appId: "1:456743345573:web:9df24b1b6dfcdae2b1dc4c",
  measurementId: "G-K5TDR1NETE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default auth;