import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBT2R6LGKqHwIS7tBJu7GafZdLss-ztA5s",
    authDomain: "whatsapp-react-clone-a5627.firebaseapp.com",
    projectId: "whatsapp-react-clone-a5627",
    storageBucket: "whatsapp-react-clone-a5627.appspot.com",
    messagingSenderId: "936051231769",
    appId: "1:936051231769:web:25dc38d64273c3854bae88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };