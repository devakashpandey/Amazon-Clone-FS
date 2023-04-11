import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsMbAfbb8T63Wm_7I1TAfyhJqT2zxrX24",
  authDomain: "challenge-24dbf.firebaseapp.com",
  projectId: "challenge-24dbf",
  storageBucket: "challenge-24dbf.appspot.com",
  messagingSenderId: "110609250052",
  appId: "1:110609250052:web:60489347100c4efcbdc251",
};

export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
