// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz7ct0gcO7jZKzhUjAAvuT4UKdDCi8CXU",
  authDomain: "calvary-bible-church-website.firebaseapp.com",
  databaseURL: "https://calvary-bible-church-website-default-rtdb.firebaseio.com",
  projectId: "calvary-bible-church-website",
  storageBucket: "calvary-bible-church-website.firebasestorage.app",
  messagingSenderId: "274803187617",
  appId: "1:274803187617:web:10d9a45690f334eea1f5e0"
};

const run = async () => {
  // Initialize Firebase
  initializeApp(firebaseConfig);
}

export { run };
