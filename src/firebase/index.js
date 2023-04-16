// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOPajAVqPuoQUUkX2l5I4JLuyhmsdvWlU",
  authDomain: "simplserv-8ea0f.firebaseapp.com",
  projectId: "simplserv-8ea0f",
  storageBucket: "simplserv-8ea0f.appspot.com",
  messagingSenderId: "677650205840",
  appId: "1:677650205840:web:bad3591d8c3d1f85c71c15"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);