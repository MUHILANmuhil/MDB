import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAePH9lBPHWyEey2sLZS4eenLXUkKb0LPw",
  authDomain: "movielist-16.firebaseapp.com",
  projectId: "movielist-16",
  storageBucket: "movielist-16.appspot.com",
  messagingSenderId: "388299304453",
  appId: "1:388299304453:web:f0587fd75e47312a64766c"
};


export const app = initializeApp(firebaseConfig);