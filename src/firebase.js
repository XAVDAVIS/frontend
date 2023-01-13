// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    GoogleAuthProvider, 
    getAuth, 
    signInWithPopup, 
    signOut } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnqRKaJIojOUJt7-L6AWNc2O5jpm5J02U",
  authDomain: "react-people-application.firebaseapp.com",
  projectId: "react-people-application",
  storageBucket: "react-people-application.appspot.com",
  messagingSenderId: "701757780262",
  appId: "1:701757780262:web:d1e7155ae834dc273b91e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Instantiate providers
const provider = new GoogleAuthProvider();

// get current auth instance 
export const auth = getAuth(app);

// set up auth functions 
export function login() {
    return signInWithPopup(auth, provider);
}

export function logout() {
    return signOut(auth);
}

