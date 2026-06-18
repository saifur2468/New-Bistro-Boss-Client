import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5BpehPPIyuS-UpINs8w9l7xcmMO9sprA",
  authDomain: "hotel-khwadawa.firebaseapp.com",
  projectId: "hotel-khwadawa",
  storageBucket: "hotel-khwadawa.firebasestorage.app",
  messagingSenderId: "959791731996",
  appId: "1:959791731996:web:08e40d930c28e91b3156d9",
  measurementId: "G-7MDCVR9BVR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;