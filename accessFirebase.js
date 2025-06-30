
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log("FIREBASE CONFIG", {
//   apiKey: Constants.expoConfig.extra.FIREBASE_API_KEY,
//   authDomain: Constants.expoConfig.extra.FIREBASE_AUTH_DOMAIN,
//   projectId: Constants.expoConfig.extra.FIREBASE_PROJECT_ID,
//   storageBucket: Constants.expoConfig.extra.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: Constants.expoConfig.extra.FIREBASE_MESSAGING_SENDER_ID,
//   appId: Constants.expoConfig.extra.FIREBASE_APP_ID,
//     measurementId: Constants.expoConfig.extra.FIREBASE_MESSAGING_SENDER_ID
// });

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.FIREBASE_API_KEY,
  authDomain: Constants.expoConfig.extra.FIREBASE_AUTH_DOMAIN,
  projectId: Constants.expoConfig.extra.FIREBASE_PROJECT_ID,
  storageBucket: Constants.expoConfig.extra.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Constants.expoConfig.extra.FIREBASE_MESSAGING_SENDER_ID,
  appId: Constants.expoConfig.extra.FIREBASE_APP_ID,
  measurementId: Constants.expoConfig.extra.FIREBASE_MESSAGING_SENDER_ID
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFirebase);

export default appFirebase;

