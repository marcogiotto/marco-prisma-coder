import * as firebase from 'firebase/app';
import {getFirestore}   from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASIlfbIUEuHnsOMAVSioePHFwUtFzej6g",
    authDomain: "prisma-coder.firebaseapp.com",
    projectId: "prisma-coder",
    storageBucket: "prisma-coder.appspot.com",
    messagingSenderId: "994819710880",
    appId: "1:994819710880:web:fc039f1a884e8735e80ec5"
  };

const app = firebase.initializeApp(firebaseConfig);

export const getFirebaes = () => {
    return app;
}

export const db = getFirestore(app);