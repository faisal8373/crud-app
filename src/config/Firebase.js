// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkQgzEA3lDvOeXN1RcWe131zQN5sdNoK0",
  authDomain: "crud-app-cd0f3.firebaseapp.com",
  projectId: "crud-app-cd0f3",
  storageBucket: "crud-app-cd0f3.appspot.com",
  messagingSenderId: "475852799084",
  appId: "1:475852799084:web:5fcc1adb899e04e29dec49"
};
  // Initialize Firebase
  

  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();