import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyABJB8g_-rFtuqwk4PpeJdPW6erGSSjtNQ",
  authDomain: "gb-react-messenger.firebaseapp.com",
  projectId: "gb-react-messenger",
  storageBucket: "gb-react-messenger.appspot.com",
  messagingSenderId: "279432002151",
  appId: "1:279432002151:web:e039701efd37e4e705f2c2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatsRef = db.ref("chats");
export const messagesRef = db.ref("messages");
