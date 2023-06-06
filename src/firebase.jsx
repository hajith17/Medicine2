// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { serverTimestamp } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyABJgQwS0eck-b_9wDM7dTz5UJduAjC0PM",
  authDomain: "medicalmart-1b99e.firebaseapp.com",
  projectId: "medicalmart-1b99e",
  storageBucket: "medicalmart-1b99e.appspot.com",
  messagingSenderId: "950078326891",
  appId: "1:950078326891:web:0b643f58c363d86406492e",
  measurementId: "G-CL6RJLERKR"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const timestamp = serverTimestamp();
export { auth, provider, timestamp };
