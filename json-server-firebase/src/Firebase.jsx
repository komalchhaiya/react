
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBjAynn5aBW-0OB1RsW92kdrHEoFBfIPT4",
  authDomain: "user-login-c955f.firebaseapp.com",
  projectId: "user-login-c955f",
  storageBucket: "user-login-c955f.firebasestorage.app",
  messagingSenderId: "990414140221",
  appId: "1:990414140221:web:f588e399c46c4d2a604b54"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
export const auth = getAuth(app);
