import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
auth.languageCode = "it"

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
const provider = new GoogleAuthProvider();

function googleSignIn() {
  firebase.auth().signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
  }).catch((error) => {
    console.log(error);
  });
}

  
  // Facebook Sign-In
var fbProvider = new FacebookAuthProvider();

function facebookSignIn() {
  firebase.auth().signInWithPopup(fbProvider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user);
  }).catch((error) => {
    console.log(error);
  });
}
