import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA13-0WrgbGY3ZsFCvj5nWA8jp6HbxYqzs",
  authDomain: "todoist-8873f.firebaseapp.com",
  databaseURL:
    "https://todoist-8873f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todoist-8873f",
  storageBucket: "todoist-8873f.appspot.com",
  messagingSenderId: "43412830065",
  appId: "1:43412830065:web:5df76a70ff48fa3748e8d0",
});

export { firebaseConfig as firebase };
