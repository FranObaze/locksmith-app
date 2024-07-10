import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
auth.languageCode = "en";
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();

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
function googleSignIn() {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Facebook Sign-In
function facebookSignIn() {
    signInWithPopup(auth, fbProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Add event listeners to the social sign-in buttons
document.querySelector(".fa-google-plus-g").parentElement.addEventListener("click", googleSignIn);
document.querySelector(".fa-facebook-f").parentElement.addEventListener("click", facebookSignIn);
