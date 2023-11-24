import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB52l9tCLT7zLGTMYbUrPtIlX2eAtBGCM",
  authDomain: "clone-b09dc.firebaseapp.com",
  projectId: "clone-b09dc",
  storageBucket: "clone-b09dc.appspot.com",
  messagingSenderId: "630443090670",
  appId: "1:630443090670:web:b9711b1cde22b1a00a49ff",
  measurementId: "G-T74CCH7SFZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
