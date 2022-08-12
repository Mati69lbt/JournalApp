import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4XdEZPcqUjD2lurRQCK-724WWPlltZO4",
  authDomain: "journalapp-3e94c.firebaseapp.com",
  projectId: "journalapp-3e94c",
  storageBucket: "journalapp-3e94c.appspot.com",
  messagingSenderId: "2029230217",
  appId: "1:2029230217:web:a21d047e7e1ccc4591ce58",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const provider = new GoogleAuthProvider();

// Initialize Firebase

// ----------------------------------------------------------------

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// export const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
