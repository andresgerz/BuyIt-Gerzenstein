 
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC-4p637kk9z6qajwkGMyXnl0eu7sBerHo",
  authDomain: "buyit-721e8.firebaseapp.com",
  projectId: "buyit-721e8",
  storageBucket: "buyit-721e8.appspot.com",
  messagingSenderId: "25078390891",
  appId: "1:25078390891:web:ffbef20bb0caafd747d12e"
};
   
const fb = firebase.initializeApp(config);

export const database = fb.firestore();