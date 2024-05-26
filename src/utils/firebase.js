import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDpbT0lFrqOJLULQkbUkgaT8yjvyrLY0uo",
    authDomain: "netflixgpt-2a37e.firebaseapp.com",
    projectId: "netflixgpt-2a37e",
    storageBucket: "netflixgpt-2a37e.appspot.com",
    messagingSenderId: "732044891871",
    appId: "1:732044891871:web:a2749df840e3d31ba4bb6a",
    measurementId: "G-SSV5Q55992"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// auth
export const auth = getAuth();