
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBv2VYImwCpU02IQA7ZbzNzzDfIkssU6Og",
  authDomain: "vinylmaniac-2ab9e.firebaseapp.com",
  projectId: "vinylmaniac-2ab9e",
  storageBucket: "vinylmaniac-2ab9e.appspot.com",
  messagingSenderId: "945272049676",
  appId: "1:945272049676:web:2980123afab2353d7f1e29"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);