// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJZ7MAM4lY91vWRs8YiN9bDtfkNEB0KuM",
    authDomain: "auth-app-7b28d.firebaseapp.com",
    projectId: "auth-app-7b28d",
    storageBucket: "auth-app-7b28d.appspot.com",
    messagingSenderId: "59334111650",
    appId: "1:59334111650:web:eb3f5014c5f2fe3520c2fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
