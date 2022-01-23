import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCTnXoceXWYSPd6-XfwIbZfPUXKlOIMNtE",
  authDomain: "ask-enactus.firebaseapp.com",
  databaseURL: "https://ask-enactus-default-rtdb.firebaseio.com",
  projectId: "ask-enactus",
  storageBucket: "ask-enactus.appspot.com",
  messagingSenderId: "1023336365811",
  appId: "1:1023336365811:web:db0fad62a74cec843f0186"
};

const app = initializeApp(firebaseConfig);

var database = getDatabase(app);

export default database;