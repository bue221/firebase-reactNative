import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDbynPDvs1VVtc6RbiUONc3qz_bqMrOPsA",
    authDomain: "rave-app-cca8d.firebaseapp.com",
    projectId: "rave-app-cca8d",
    storageBucket: "rave-app-cca8d.appspot.com",
    messagingSenderId: "970155581264",
    appId: "1:970155581264:web:0529e8bf2e26dae7179655",
    measurementId: "G-BDRL8YRJ0C"
  };

  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()

  export default {
      firebase, db
  }