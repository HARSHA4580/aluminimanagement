// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Your actual Firebase config (as you provided)
const firebaseConfig = {
  apiKey: "AIzaSyDOjbYDqawJS8yIHUlgfuY9N6-aHISNkUM",
  authDomain: "connectmentor-b1ec8.firebaseapp.com",
  projectId: "connectmentor-b1ec8",
  storageBucket: "connectmentor-b1ec8.firebasestorage.app",
  messagingSenderId: "333219090422",
  appId: "1:333219090422:web:78ad88d2e191b8e3a7c1d7",
  measurementId: "G-C1ED49WM4T"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Services
const db = getFirestore(app);       // Firestore
const auth = getAuth(app);          // Auth
const analytics = getAnalytics(app); // Analytics (Optional)

// ✅ Export for use in other files
export { db, auth, analytics };
