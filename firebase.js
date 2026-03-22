// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

// Your config
const firebaseConfig = {
  apiKey: "AIzaSyAkoWeMnqL9sN-Ghxcwq1wye8iml06qBEg",
  authDomain: "iks-portal.firebaseapp.com",
  projectId: "iks-portal",
  storageBucket: "iks-portal.firebasestorage.app",
  messagingSenderId: "850853533746",
  appId: "1:850853533746:web:a224e31b38d784f39a042b"
};

// Initialize
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);