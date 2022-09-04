import { getApp, getApps, initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT7V4vXYC4w5r0HsI0BBQ-qw2m694kbBs",
    authDomain: "restaurant-web-app-frontend.firebaseapp.com",
    projectId: "restaurant-web-app-frontend",
    storageBucket: "restaurant-web-app-frontend.appspot.com",
    messagingSenderId: "30387721301",
    appId: "1:30387721301:web:f71a9f09cefc662d6e30dc",
    measurementId: "G-D9P0TS45XV"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {app, firestore, storage, auth };
