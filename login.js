import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAl5E2rg9ttiazMTedYwS-gh7pHXseGXDA",
    authDomain: "the-locksmith-19893.firebaseapp.com",
    projectId: "the-locksmith-19893",
    storageBucket: "the-locksmith-19893.appspot.com",
    messagingSenderId: "234318635847",
    appId: "1:234318635847:web:abf2db11ba809b4799e262",
    measurementId: "G-FQP1DQ7SH3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const container = document.getElementById("super-container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Google Sign-In
const googleProvider = new GoogleAuthProvider();

window.googleSignIn = function() {
    auth.signInWithRedirect(googleProvider);
}

// Facebook Sign-In
const facebookProvider = new FacebookAuthProvider();

window.facebookSignIn = function() {
    auth.signInWithRedirect(facebookProvider);
}

// Handle redirect results
firebase.auth().getRedirectResult().then((result) => {
    if (result.credential) {
      // This gives you the OAuth Access Token for the provider.
      const credential = result.credential;
      // Use this to sign in the user
      const user = result.user;
      console.log(user);
    }
  }).catch((error) => {
    // Handle errors here.
    console.error(error);
  });