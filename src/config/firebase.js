// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAMfeAnf9_J8Ct-4FY0H570Zcn0aREA-1c",
    authDomain: "learning-authentications-882s.firebaseapp.com",
    projectId: "learning-authentications-882s",
    storageBucket: "learning-authentications-882s.appspot.com",
    messagingSenderId: "1058075923792",
    appId: "1:1058075923792:web:09d06cb83dd6b9c8828855",
    measurementId: "G-FVSFSY6E29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore(app);

export { auth, analytics };
