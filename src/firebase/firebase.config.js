// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwhIJ2h2yXa52fzhg9u3a_Tr5SVa2uww",
  authDomain: "assignment-10-lotas.firebaseapp.com",
  projectId: "assignment-10-lotas",
  storageBucket: "assignment-10-lotas.firebasestorage.app",
  messagingSenderId: "538889827243",
  appId: "1:538889827243:web:bfea81afa71baf1de358ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;