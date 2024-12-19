// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVSoLmvHz4FzuxPfDIj0mtfcIsn0w5wtA",
  authDomain: "assignment-10-6de5d.firebaseapp.com",
  projectId: "assignment-10-6de5d",
  storageBucket: "assignment-10-6de5d.firebasestorage.app",
  messagingSenderId: "465290901809",
  appId: "1:465290901809:web:8165a51217c081bc86d810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;