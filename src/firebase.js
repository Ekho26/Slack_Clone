import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBqAiJ-xCg5lDNkFivJ_Ajo1TWTqUGZg1E",
  authDomain: "slack-clone-f4e29.firebaseapp.com",
  projectId: "slack-clone-f4e29",
  storageBucket: "slack-clone-f4e29.appspot.com",
  messagingSenderId: "712307203201",
  appId: "1:712307203201:web:05550c5d31deae9aec4180",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;