// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1yQxA-fJIzsihrFD9wT47Cfp8U2hM024",
  authDomain: "buzzer-app-e0a37.firebaseapp.com",
  projectId: "buzzer-app-e0a37",
  storageBucket: "buzzer-app-e0a37.appspot.com",
  messagingSenderId: "40692936554",
  appId: "1:40692936554:web:ee3e9d2b68bac55616bf13"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);

export default app.database