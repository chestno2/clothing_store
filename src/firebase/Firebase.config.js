import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDpEzXpB2k87bWhxpfgOmmEzUXQ-v-s5k4",
    authDomain: "clothing-store-f3095.firebaseapp.com",
    projectId: "clothing-store-f3095",
    storageBucket: "clothing-store-f3095.appspot.com",
    messagingSenderId: "651497925059",
    appId: "1:651497925059:web:97591b3e9c2e94fadfb576",
    measurementId: "G-PEGBW82NT9"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export  {firebase};
