import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyAA3Kxom-krcqlAO3G_H51UbelKHnbO758",
  authDomain: "netflix-17b9f.firebaseapp.com",
  projectId: "netflix-17b9f",
  storageBucket: "netflix-17b9f.appspot.com",
  messagingSenderId: "31253855912",
  appId: "1:31253855912:web:5a7e0ad8795750dd42cc9d",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
