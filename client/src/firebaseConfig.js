import firebase from "firebase/app";
import "firebase/auth";

// ------------------------------------------------------
// WEB APP's FIREBASE CONFIGURATION
// ------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDu6lZ2IFw4JQ1OwJT7eowZ06pIPBK5FhY",
    authDomain: "librova-4f62f.firebaseapp.com",
    databaseURL: "https://librova-4f62f.firebaseio.com",
    projectId: "librova-4f62f",
    storageBucket: "librova-4f62f.appspot.com",
    messagingSenderId: "890119885053",
    appId: "1:890119885053:web:fc2f6e0eb719cbebb0ae94"
  };

// ------------------------------------------------------
// FIREBASE INIZALIZATION
// ------------------------------------------------------
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()

export {auth};
// export default firebaseConfig;


// ------------------------------------------------------
// CREATE USER
// ------------------------------------------------------
// let email = "prueba@gmail.com"
// let password = "prueba1234"
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });


// ------------------------------------------------------
// INICIAR SESIÓN
// ------------------------------------------------------
  // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });