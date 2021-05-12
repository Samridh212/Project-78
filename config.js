import firebase from 'firebase'
require("@firebase/firestore")


// Initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyCVyho6MQrfYNd92-4dZkKUBycqlFltM18",
    authDomain: "thebartersystem-fa679.firebaseapp.com",
    databaseURL: "https://thebartersystem-fa679-default-rtdb.firebaseio.com",
    projectId: "thebartersystem-fa679",
    storageBucket: "thebartersystem-fa679.appspot.com",
    messagingSenderId: "504671742923",
    appId: "1:504671742923:web:93c361684a4b0be037e44e"
  };

  // Initialize firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()