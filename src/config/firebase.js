// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-nmqJNztazMZl6UCFmQsffbtwyhHHneg",
  authDomain: "draft-site-8198b.firebaseapp.com",
  projectId: "draft-site-8198b",
  storageBucket: "draft-site-8198b.appspot.com",
  messagingSenderId: "53719669530",
  appId: "1:53719669530:web:cb30dcf9700ad0d3972aa3",
  measurementId: "G-N3NTC09K5F"
};

const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
// export const storage = getStorage(app);