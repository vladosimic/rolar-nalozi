// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyA3J80RmSqvJguY1WSo72EjE6V_Xyr4bYA',
  authDomain: 'rolar2022.firebaseapp.com',
  projectId: 'rolar2022',
  storageBucket: 'rolar2022.appspot.com',
  messagingSenderId: '1084398532142',
  appId: '1:1084398532142:web:31f0bd295472c9565fd1bf',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
