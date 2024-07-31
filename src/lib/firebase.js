import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-c80b1.firebaseapp.com",
  projectId: "reactchat-c80b1",
  storageBucket: "reactchat-c80b1.appspot.com",
  messagingSenderId: "1071635095031",
  appId: "1:1071635095031:web:97cc3d3ab2457624c9e2f2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()