// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  firebase.initializeApp({
  apiKey: "AIzaSyAS-r2yUjoU-1QoqSFSkLE8bsKP1wJUwO0",
  authDomain: "tequeremossiempremami.firebaseapp.com",
  projectId: "tequeremossiempremami",
  storageBucket: "tequeremossiempremami.appspot.com",
  messagingSenderId: "306747150951",
  appId: "1:306747150951:web:eafbbee7ea6f1375247ac2"
});

// Initialize Firebase
export const db = firebaseConfig.firestore()
export default firebaseConfig;
