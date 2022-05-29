// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfphPfHRpZ3yVMCczXCv_iLGoO-VR8K1Q",
  authDomain: "fir-b8d36.firebaseapp.com",
  projectId: "fir-b8d36",
  storageBucket: "fir-b8d36.appspot.com",
  messagingSenderId: "228356506389",
  appId: "1:228356506389:web:140bf057833fc8175f9f1c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();

export const database = {
  users : firestore.collection('users')
}

export  const storage = firebase.storage(); 