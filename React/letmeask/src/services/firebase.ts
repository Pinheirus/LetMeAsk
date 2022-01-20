import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAMspkE-5fsXswQ4C-hcH60BzYERklNdxM",
    authDomain: "letmeask-react-a0dad.firebaseapp.com",
    databaseURL: "https://letmeask-react-a0dad-default-rtdb.firebaseio.com",
    projectId: "letmeask-react-a0dad",
    storageBucket: "letmeask-react-a0dad.appspot.com",
    messagingSenderId: "914448449335",
    appId: "1:914448449335:web:1009734d028e751c0424b2"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };