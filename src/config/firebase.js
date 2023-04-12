//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx4sqQLqC4jmhLfs-udQyT4xwGVm7gWX8",
  authDomain: "aulafirebase-18972.firebaseapp.com",
  projectId: "aulafirebase-18972",
  storageBucket: "aulafirebase-18972.appspot.com",
  messagingSenderId: "1093488954273",
  appId: "1:1093488954273:web:c1f28d5d1b9567916459e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

