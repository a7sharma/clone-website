import firebase from './firebase';

const firebaseApp = firebase.intializeApp({
    apiKey: "AIzaSyBQ8G-Dbsy8I4EeD4DjAjPbw-YmrCN-xYk",
    authDomain: "clone-78d07.firebaseapp.com",
    projectId: "clone-78d07",
    storageBucket: "clone-78d07.appspot.com",
    messagingSenderId: "221307655782",
    appId: "1:221307655782:web:4c92c3f1ac7fe26fb07fa7",
    measurementId: "G-1Y37F1SFJE"
});

const auth = firebase.auth();
export{auth};