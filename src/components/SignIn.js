import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyB_BOLy_TboCfs1X6dqTFvoLpQcB1ie69g",
  authDomain: "beanie-9737c.firebaseapp.com",
  projectId: "beanie-9737c",
  storageBucket: "beanie-9737c.appspot.com",
  messagingSenderId: "215378413594",
  appId: "1:215378413594:web:6178f6971afae63cf869a3",
  measurementId: "G-RYGE1SDV2F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

const SignIn = () => {
  const history = useHistory();
  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("success! ", user);
        history.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert("Ошибка");
        console.log("error ", errorCode, errorMessage);
      });
  };
  return (
    <div
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        width: 420,
        textAlign: "center",
        marginTop: 20,
      }}
    >
      <button onClick={handleAuth}>Авторизация через Google</button>
    </div>
  );
};

export default SignIn;
