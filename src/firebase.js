import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuOhm0VC8u_2IJo0CrMxCTJLuLjbwhyxs",
  authDomain: "ask-enactus-15570.firebaseapp.com",
  databaseURL: "https://ask-enactus-15570-default-rtdb.firebaseio.com",
  projectId: "ask-enactus-15570",
  storageBucket: "ask-enactus-15570.appspot.com",
  messagingSenderId: "750211504894",
  appId: "1:750211504894:web:90dbc3505bec34eff6e3af"
};

const app = initializeApp(firebaseConfig);

var database = getDatabase(app);

export default database;