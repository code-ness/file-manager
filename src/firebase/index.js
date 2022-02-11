import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,

  authDomain: "file-manager-f0602.firebaseapp.com",

  projectId: "file-manager-f0602",

  storageBucket: "file-manager-f0602.appspot.com",

  messagingSenderId: "777438229635",

  appId: "1:777438229635:web:5d75a96fcb36ccb7d197b6",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
