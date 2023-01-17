import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu6Rz-ACYum80Ow7Oi4RYc6pJCkrsVzzI",
  authDomain: "netflix-clone-nextjs-b9bd5.firebaseapp.com",
  projectId: "netflix-clone-nextjs-b9bd5",
  storageBucket: "netflix-clone-nextjs-b9bd5.appspot.com",
  messagingSenderId: "615196049644",
  appId: "1:615196049644:web:f5f73c17a73ae3676fa5c9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
