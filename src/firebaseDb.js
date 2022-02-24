import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth,signInWithEmailAndPassword,signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD4myaGSSradU9QVivO-D562iK6_LVG9ac",
  authDomain: "wolverine-b85ca.firebaseapp.com",
  projectId: "wolverine-b85ca",
  storageBucket: "wolverine-b85ca.appspot.com",
  messagingSenderId: "754658444185",
  appId: "1:754658444185:web:5deeb0c624dd48aefa8908",
  measurementId: "G-LG9PNWVB68"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = firebaseApp.firestore();
export {db,auth,signInWithEmailAndPassword,signOut}; 
