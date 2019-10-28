import firebase from 'firebase/app';
import 'firebase/storage';


var config = {
    apiKey: "AIzaSyA5syolTlYxwnJOYkm6TtwGYm4U38WdclY",
    authDomain: "clothesoftryproject.firebaseapp.com",
    databaseURL: "https://clothesoftryproject.firebaseio.com",
    projectId: "clothesoftryproject",
    storageBucket: "clothesoftryproject.appspot.com",
    messagingSenderId: "558770995675",
    appId: "1:558770995675:web:9e7e1b0c1bc4d84329a7fe",
    measurementId: "G-1HHC4F91VK"
  };

  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage,firebase as default
  }
