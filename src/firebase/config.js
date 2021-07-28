import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhKVIJmr_ErKJCML7sbvlRgD29quZxKTg",
    authDomain: "react-firegram-eeb81.firebaseapp.com",
    projectId: "react-firegram-eeb81",
    storageBucket: "react-firegram-eeb81.appspot.com",
    messagingSenderId: "156131136298",
    appId: "1:156131136298:web:6d1116c77a2b0b0a09c453"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //initializing 2 services
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};