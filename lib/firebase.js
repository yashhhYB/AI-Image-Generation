// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDrHj567-SO2a78rA5aF9ePtEd9H8bkrQ",
  authDomain: "ai-image-gen-4a9bd.firebaseapp.com",
  projectId: "ai-image-gen-4a9bd",
  storageBucket: "ai-image-gen-4a9bd.appspot.com",
  messagingSenderId: "633103103658",
  appId: "1:633103103658:web:a797f11dc0984c304d82d3",
  measurementId: "G-ZN6C3KN7Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);