import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC31RVc_Q5UQ2pFYSKI4qEXOfk53BpKa50",
    authDomain: "ig-reels-800b0.firebaseapp.com",
    databaseURL: "https://ig-reels-800b0.firebaseio.com",
    projectId: "ig-reels-800b0",
    storageBucket: "ig-reels-800b0.appspot.com",
    messagingSenderId: "759791397378",
    appId: "1:759791397378:web:b5f90905276a3cecdc951b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;