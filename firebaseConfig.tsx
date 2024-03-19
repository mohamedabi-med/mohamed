import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  // Initialize Firebase


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRwJpKnGdBQyQ1Kzf8SHYnAwF9YjLiUPY",
  authDomain: "worldwebsolutions-79b54.firebaseapp.com",
  projectId: "worldwebsolutions-79b54",
  storageBucket: "worldwebsolutions-79b54.appspot.com",
  messagingSenderId: "810007553513",
  appId: "1:810007553513:web:0ca7b78ab886c89b971778",
  measurementId: "G-XPZX6MVN8P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase


export default  firebaseConfig;