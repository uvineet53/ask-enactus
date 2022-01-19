// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJUQshITW4znjLdNaNovM5osnDIMDPlLQ",
  authDomain: "askenactusaditi.firebaseapp.com",
  databaseURL: "https://askenactusaditi-default-rtdb.firebaseio.com",
  projectId: "askenactusaditi",
  storageBucket: "askenactusaditi.appspot.com",
  messagingSenderId: "202352971155",
  appId: "1:202352971155:web:ec65c7c9b6e807a9d96c66",
  measurementId: "G-77WJ3LX3Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);
export default database; 