let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let password = document.getElementById("password");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


// Update slider value display
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

// Generate password on button click
genBtn.addEventListener("click", () => {
    password.value = createPassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()_+=-\\][{}/<>";

function createPassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars === "") {
        return genPassword;
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value);
    copyIcon.classList.add('highlight');
    setTimeout(() => {
        copyIcon.classList.remove('highlight');
    }, 200);
});
