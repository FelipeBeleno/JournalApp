import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAbOHxpgchVzRIT8D6ZemnbhS4d429ApD0",
    authDomain: "react-apps-b5dfb.firebaseapp.com",
    databaseURL: "https://react-apps-b5dfb.firebaseio.com",
    projectId: "react-apps-b5dfb",
    storageBucket: "react-apps-b5dfb.appspot.com",
    messagingSenderId: "163521323955",
    appId: "1:163521323955:web:2d91742a9953589986a1c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export{
    db,
    googleAuthProvider,
    firebase
}
