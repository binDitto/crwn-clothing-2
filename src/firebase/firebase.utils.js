import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBmcKqFYq8GuYotPOJPSX7tnX6jegn5qa4",
  authDomain: "crwn-db-a98ff.firebaseapp.com",
  projectId: "crwn-db-a98ff",
  storageBucket: "crwn-db-a98ff.appspot.com",
  messagingSenderId: "290202517324",
  appId: "1:290202517324:web:3bb66e682e6b018ac6d9e9",
  measurementId: "G-KKRD1XYPNQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;