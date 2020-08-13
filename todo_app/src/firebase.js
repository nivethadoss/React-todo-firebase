import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC7HScOOu-_9dTNTI6FzLX9SJHOIdCj8JE",
    authDomain: "todo-app-cp-bf364.firebaseapp.com",
    databaseURL: "https://todo-app-cp-bf364.firebaseio.com",
    projectId: "todo-app-cp-bf364",
    storageBucket: "todo-app-cp-bf364.appspot.com",
    messagingSenderId: "1041015790642",
    appId: "1:1041015790642:web:ff170c215f9502fae9b02b",
    measurementId: "G-1E6PJE7Y07"

})

    
const db = firebaseApp.firestore();

export default db;