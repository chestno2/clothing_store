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

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection("users");

  const snapShot = await userRef.get();
  const collectionSnapshot = await collectionRef.get();
  console.log({ collectionSnapshot });

  // we get the snapshot from firebase
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //we create a new docuemnt inside our data base
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  //getting from the firestore
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)

  });
  return await batch.commit()
  //returns promise
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
