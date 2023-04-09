// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  firebase.initializeApp({
  apiKey: "AIzaSyALgOR__suR3Qkla_XkOrvjDxUhr6L1UUM",
  authDomain: "estelitaproyect.firebaseapp.com",
  projectId: "estelitaproyect",
  storageBucket: "estelitaproyect.appspot.com",
  messagingSenderId: "1075440705",
  appId: "1:1075440705:web:dd53c6e7ebf5bd90d9aac0"
});

// Initialize Firebase
export const db = firebaseConfig.firestore()
export default firebaseConfig;
