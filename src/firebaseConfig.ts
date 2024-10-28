// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJq1-I2AZCzttUnIaq44DsQi1QL_w8wu8",
  authDomain: "sociallogin-9de9e.firebaseapp.com",
  projectId: "sociallogin-9de9e",
  storageBucket: "sociallogin-9de9e.appspot.com",
  messagingSenderId: "1097113946535",
  appId: "1:1097113946535:web:ba724bf0deeab2330d0e82"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };