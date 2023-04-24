
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDkmyey_JYKk34qfqwV2dWSEMLSrr3KJUg",
  authDomain: "chatappfirebasetd.firebaseapp.com",
  projectId: "chatappfirebasetd",
  storageBucket: "chatappfirebasetd.appspot.com",
  messagingSenderId: "279407104028",
  appId: "1:279407104028:web:8ad973257e963fd8a94fd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()