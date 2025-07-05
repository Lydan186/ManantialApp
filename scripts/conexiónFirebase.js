// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Si usarás autenticación
import { getFirestore } from "firebase/firestore"; // Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvN8tl0Vq9uksOuQHLMEuiNyuVmTDWZIw",
    authDomain: "manantialapp-96205.firebaseapp.com",
    projectId: "manantialapp-96205",
    storageBucket: "manantialapp-96205.appspot.com",
    messagingSenderId: "1095435260324",
    appId: "1:1095435260324:web:6474eb3e61b3870f61b131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // Opcional

export { auth, db, app };