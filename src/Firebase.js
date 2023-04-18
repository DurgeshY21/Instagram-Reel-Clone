import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaoGJkoUFNjxPwP4H0horZHowV-p_LiPo",
  authDomain: "ig-reels-277b1.firebaseapp.com",
  // databaseURL: "https://ig-reels-ea107.firebaseio.com",
  projectId: "ig-reels-277b1",
  storageBucket: "ig-reels-277b1.appspot.com",
  messagingSenderId: "346276809632",
  appId: "1:346276809632:web:c408b11a972953688a32c5",
  measurementId: "G-T8FNNPMBCY"
};

//   to connect to database i.e. firebase- we use below lines of code

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// above line is used to access the firebase database

export default db;