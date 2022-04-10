// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhtEhgVuAMjjcuUNf4XFfCy_HbaUGBKnA",
  authDomain: "ema-john-auth-e1ece.firebaseapp.com",
  projectId: "ema-john-auth-e1ece",
  storageBucket: "ema-john-auth-e1ece.appspot.com",
  messagingSenderId: "464575121238",
  appId: "1:464575121238:web:293b705ac5bcab1ea078f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;