// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBOPajAVqPuoQUUkX2l5I4JLuyhmsdvWlU",
//   authDomain: "simplserv-8ea0f.firebaseapp.com",
//   projectId: "simplserv-8ea0f",
//   storageBucket: "simplserv-8ea0f.appspot.com",
//   messagingSenderId: "677650205840",
//   appId: "1:677650205840:web:bad3591d8c3d1f85c71c15"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDx_XhTTLUxemoB1lZt1A7e_-C0OMtU6So",
  authDomain: "simplserv-b60b7.firebaseapp.com",
  projectId: "simplserv-b60b7",
  storageBucket: "simplserv-b60b7.appspot.com",
  messagingSenderId: "196871872018",
  appId: "1:196871872018:web:36e14f2ba342b6216102cb",
  measurementId: "G-VHEDTP3DZW"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth=getAuth(app);
export {
  db
}