import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjBKhSYFKejJbKlUTPQ8uhE5XmtMAWNbw",
  authDomain: "instagram-reel-clone-96435.firebaseapp.com",
  projectId: "instagram-reel-clone-96435",
  storageBucket: "instagram-reel-clone-96435.appspot.com",
  messagingSenderId: "346545147163",
  appId: "1:346545147163:web:2fddd2b9952049bb0d17be",
  measurementId: "G-FXFKHBDDZQ"
};

//   to connect to database i.e. firebase- we use below lines of code

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// above line is used to access the firebase database

export default db;