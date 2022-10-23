// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyBNz0F8b_R25_brjrI4TaH4JpYtT6oDbYQ",
  authDomain: "billboard-9c189.firebaseapp.com",
  databaseURL: "https://billboard-9c189-default-rtdb.firebaseio.com",
  projectId: "billboard-9c189",
  storageBucket: "billboard-9c189.appspot.com",
  messagingSenderId: "145270326569",
  appId: "1:145270326569:web:445184ed93a14783376338",
};
// import { initializeApp } from "firebase/app";
// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBNz0F8b_R25_brjrI4TaH4JpYtT6oDbYQ",
//   authDomain: "billboard-9c189.firebaseapp.com",
//   databaseURL: "https://billboard-9c189-default-rtdb.firebaseio.com",
//   projectId: "billboard-9c189",
//   storageBucket: "billboard-9c189.appspot.com",
//   messagingSenderId: "145270326569",
//   appId: "1:145270326569:web:445184ed93a14783376338",
// });
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
