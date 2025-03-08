import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "calming-w.firebaseapp.com",
  databaseURL: "https://calming-w-default-rtdb.firebaseio.com",
  projectId: "calming-w",
  storageBucket: "calming-w.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };