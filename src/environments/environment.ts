/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1OjGV_lpi4XMVm4tQUBR2w9iJUVguxo",
  authDomain: "kirirom-forum-chatbot.firebaseapp.com",
  databaseURL: "https://kirirom-forum-chatbot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kirirom-forum-chatbot",
  storageBucket: "kirirom-forum-chatbot.appspot.com",
  messagingSenderId: "1047652526437",
  appId: "1:1047652526437:web:94d67691d74f8b5284d98c",
  measurementId: "G-FZM9MWH2RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBN1OjGV_lpi4XMVm4tQUBR2w9iJUVguxo",
    authDomain: "kirirom-forum-chatbot.firebaseapp.com",
    databaseURL: "https://kirirom-forum-chatbot-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kirirom-forum-chatbot",
    storageBucket: "kirirom-forum-chatbot.appspot.com",
    messagingSenderId: "1047652526437",
  }
};
