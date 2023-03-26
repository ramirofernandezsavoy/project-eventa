import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSYBetWGzO9I_dJScb0jT3CqZlJWd3qoE",
    authDomain: "eventia-72938.firebaseapp.com",
    projectId: "eventia-72938",
    storageBucket: "eventia-72938.appspot.com",
    messagingSenderId: "872101945788",
    appId: "1:872101945788:web:711d24d2f24dba07870bb9",
    measurementId: "G-BVWTW1E6LL"
  };

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
export const db = getFirestore(app);

