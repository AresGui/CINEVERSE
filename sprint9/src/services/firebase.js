// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ1tzsidhmiWm3Fpq-xkzMCKGuiTWPaFA",
    authDomain: "film-streaming-app.firebaseapp.com",
    projectId: "film-streaming-app",
    storageBucket: "film-streaming-app.appspot.com",
    messagingSenderId: "1001608809896",
    appId: "1:1001608809896:web:b2d5ccfe3e42f0ad6de19d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
