import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB_Iuc3YZo3SJy5vIVw_19lKBSEDfvJ8XI",
  authDomain: "c71cycle.firebaseapp.com",
  projectId: "c71cycle",
  storageBucket: "c71cycle.appspot.com",
  messagingSenderId: "745050092352",
  appId: "1:745050092352:web:63d42a9af6e3cff01d80a5",
  measurementId: "G-8VPZG43VQJ"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
