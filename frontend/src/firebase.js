import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import credentials from "./credentials";

firebase.initializeApp(credentials);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
