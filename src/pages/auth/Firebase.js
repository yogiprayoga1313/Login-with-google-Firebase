// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl3ZuaCKwcowK-2Wka1ICs-C6R2-q3chQ",
  authDomain: "login-with-66810.firebaseapp.com",
  projectId: "login-with-66810",
  storageBucket: "login-with-66810.appspot.com",
  messagingSenderId: "567438063877",
  appId: "1:567438063877:web:3dc344ca5a2ae6f0201f6c",
  measurementId: "G-VQP6XN6HP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {app}

