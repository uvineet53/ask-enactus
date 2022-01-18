import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD-HEl8MpJITZb6Hg7Zh4XEbGtKUQd17x0",
    authDomain: "askenactus.firebaseapp.com",
    databaseURL: "https://askenactus-default-rtdb.firebaseio.com",
    projectId: "askenactus",
    storageBucket: "askenactus.appspot.com",
    messagingSenderId: "1089423146393",
    appId: "1:1089423146393:web:a07e68c7cc6404d5e7e708",
  };

const app = initializeApp(firebaseConfig);

var database = getDatabase(app);

export default database;