import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, addDoc } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
};

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app);
const usersRef = collection(db, "users");
const adminRef = collection(db, "admins");

export { db, usersRef, getDocs, query, where, addDoc, adminRef };
