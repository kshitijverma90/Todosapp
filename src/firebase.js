import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1Ajh5D8qroeZwPnZkrtkeVOFFAinslxc",
    authDomain: "todos-app-84323.firebaseapp.com",
    projectId: "todos-app-84323",
    storageBucket: "todos-app-84323.appspot.com",
    messagingSenderId: "299034685124",
    appId: "1:299034685124:web:1e518b57b8bfe099332391",
    measurementId: "G-J1W8F064NY"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};