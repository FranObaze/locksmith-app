const hints = [
    "Password should be 5 characters long.",
    "Password should contain at least one number.",
    "Password should contain at least one uppercase letter.",
    "Password should contain at least one lowercase letter.",
    "Password should not contain special characters.",
    "Password should not start or end with a number.",
    "Password should not start or end with a letter.",
    "Password should not be a common word or phrase.",
    "Password should not be a previously used password.",
    "Password should be unique and difficult to guess."
];

function checkPassword() {
    const password = document.getElementById("passwordInput").value;

    if (password.length !== 5) {
        showMessage("Password should be 5 characters long.");
    } else if (!/\d/.test(password)) {
        showMessage("Password should contain at least one number.");
    } else if (!/[A-Z]/.test(password)) {
        showMessage("Password should contain at least one uppercase letter.");
    } else if (!/[a-z]/.test(password)) {
        showMessage("Password should contain at least one lowercase letter.");
    } else if (/[^A-Za-z0-9]/.test(password)) {
        showMessage("Password should not contain special characters.");
    } else if (/^\d|\d$/.test(password)) {
        showMessage("Password should not start or end with a number.");
    } else if (/^[A-Za-z]|[A-Za-z]$/.test(password)) {
        showMessage("Password should not start or end with a letter.");
    } else if (["password", "12345", "qwerty"].includes(password.toLowerCase())) {
        showMessage("Password should not be a common word or phrase.");
    } else {
        showMessage("Congratulations! You've guessed the correct password.");
    }
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}
