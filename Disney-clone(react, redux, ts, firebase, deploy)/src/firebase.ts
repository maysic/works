import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAgkoigcDo9BtDh_o1KqB-9TPIVH1V740Y",
  authDomain: "disney-clone-2d98d.firebaseapp.com",
  projectId: "disney-clone-2d98d",
  storageBucket: "disney-clone-2d98d.appspot.com",
  messagingSenderId: "795238284831",
  appId: "1:795238284831:web:c1c31bed7bf3fefcfb1f2a",
  measurementId: "G-TPHWD0QHCP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
