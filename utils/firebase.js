import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCSABlcGQcR2fP0hs8SsSuakevz_6XtBck",
  authDomain: "chat-d3499.firebaseapp.com",
  projectId: "chat-d3499",
  storageBucket: "chat-d3499.appspot.com",
  messagingSenderId: "960367213244",
  appId: "1:960367213244:web:33a2c86258cf38ac5faeb9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)