import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAsaKAgdRXF_VoBXrbEYGlsg2VUhr7fhA",
  authDomain: "chat-adeb8.firebaseapp.com",
  projectId: "chat-adeb8",
  storageBucket: "chat-adeb8.appspot.com",
  messagingSenderId: "794196166812",
  appId: "1:794196166812:web:13ea9e1ca97f9978234559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Модули, используемые в проекте(аутентификация и firestore)
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);