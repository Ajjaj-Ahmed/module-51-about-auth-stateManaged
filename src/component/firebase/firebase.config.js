// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmkKtsX8UyOiIcEkDZ9yenSDAq30q7Y3k",
  authDomain: "context-api-authenticati-1fdcf.firebaseapp.com",
  projectId: "context-api-authenticati-1fdcf",
  storageBucket: "context-api-authenticati-1fdcf.appspot.com",
  messagingSenderId: "937455955645",
  appId: "1:937455955645:web:5340d5b03d076b89bd11d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth