// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpSGEGRRJIZ7UogtWzpW2UhuvYS9jaMSo",
  authDomain: "flashcard-saas-7c37a.firebaseapp.com",
  projectId: "flashcard-saas-7c37a",
  storageBucket: "flashcard-saas-7c37a.appspot.com",
  messagingSenderId: "685688386922",
  appId: "1:685688386922:web:208125eef6fba14f11e113",
  measurementId: "G-ZE9R9FY26B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore(app)
export {db}