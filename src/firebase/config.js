import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDOeMC8aU6VKdRIq8dQ8HFOcGuVeSUG7JA",
  authDomain: "e-portal-fc6d8.firebaseapp.com",
  databaseURL: "https://e-portal-fc6d8-default-rtdb.firebaseio.com",
  projectId: "e-portal-fc6d8",
  storageBucket: "e-portal-fc6d8.appspot.com",
  messagingSenderId: "916845418392",
  appId: "1:916845418392:web:c1fc205c04ff63df883ded",
  measurementId: "G-TQT6LPRDGW"
};

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)







