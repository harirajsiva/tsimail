import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDEib_hv2xHKVbzvDWHC-r42lAdtbPRSIs",
  authDomain: "tsimail-e7018.firebaseapp.com",
  projectId: "tsimail-e7018",
  storageBucket: "tsimail-e7018.appspot.com",
  messagingSenderId: "908508676151",
  appId: "1:908508676151:web:e6ab07ceb9fcca6863ffb2",
  measurementId: "G-TGW7BDZJ5S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db=firebase.firestore();

export default db;