// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuVQGsWKJ6wFNzMIdrSpFyB_CzTr2E3tE",
  authDomain: "wookies-coderhouse.firebaseapp.com",
  projectId: "wookies-coderhouse",
  storageBucket: "wookies-coderhouse.appspot.com",
  messagingSenderId: "225465818750",
  appId: "1:225465818750:web:fa65028a9a1e824eee822f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db