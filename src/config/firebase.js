// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPrnhS4FZ2fSBrUCLUfFslOyNIYBo85zU",
  authDomain: "mock-test-b4d31.firebaseapp.com",
  projectId: "mock-test-b4d31",
  storageBucket: "mock-test-b4d31.appspot.com",
  messagingSenderId: "140220065993",
  appId: "1:140220065993:web:925a4606a78e3755718518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const provider = new GoogleAuthProvider();