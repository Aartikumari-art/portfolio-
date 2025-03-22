import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCz-PIfvj-bUwaycavN2ovOsFfrDrr6vys",
  authDomain: "react-portfolio-917ce.firebaseapp.com",
  projectId: "react-portfolio-917ce",
  storageBucket: "react-portfolio-917ce.appspot.com",
  messagingSenderId: "697888960982",
  appId: "1:697888960982:web:d5e8aa3eae76d0573df477",
  measurementId: "G-ZKHG58J4BQ",
};


 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
