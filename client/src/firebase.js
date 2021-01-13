import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
const config = {
  apiKey: "AIzaSyD-YG1Qi6ui5aeROLe72ktg-v22itSiWo4",
  authDomain: "universal-shop-12345.firebaseapp.com",
  projectId: "universal-shop-12345",
  storageBucket: "universal-shop-12345.appspot.com",
  messagingSenderId: "76007308522",
  appId: "1:76007308522:web:4f897a2319b6908bb62b93"
};
// Initialize Firebase
if(firebase.app.length) {
  firebase.initializeApp(config);
}

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();