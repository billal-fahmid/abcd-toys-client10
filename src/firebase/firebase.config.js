// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfkHDGF-4rkxu7Nx2dXYaayKkyeWQ64UQ",
  authDomain: "toy-market-place-assignment-11.firebaseapp.com",
  projectId: "toy-market-place-assignment-11",
  storageBucket: "toy-market-place-assignment-11.appspot.com",
  messagingSenderId: "983458229087",
  appId: "1:983458229087:web:ba2885feb8bc84536364ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app