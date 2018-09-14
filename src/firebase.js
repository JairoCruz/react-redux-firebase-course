
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAsAN2Xe8Stw2C9Zi8IQfjnw7rFHtjPejg",
    authDomain: "react-redux-10272.firebaseapp.com",
    databaseURL: "https://react-redux-10272.firebaseio.com",
    projectId: "react-redux-10272",
    storageBucket: "react-redux-10272.appspot.com",
    messagingSenderId: "112461680324"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');
