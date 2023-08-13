// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyClgNY70gUAHEm0A5FarTzVUPVUuA06xWA",
  authDomain: "real-estate-ea295.firebaseapp.com",
  projectId: "real-estate-ea295",
  storageBucket: "real-estate-ea295.appspot.com",
  messagingSenderId: "338470264472",
  appId: "1:338470264472:web:f2ef477d525e1b61c47aed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
