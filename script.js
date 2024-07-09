
//For Password Generation & Customization
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



// For OTP Validator
const step1 = document.querySelector(".step1"),
step2 = document.getElementById("step2"),
step3 = document.querySelector(".step3");
emailAddress = document.getElementById("emailId"),
verifyEmail = document.getElementById("verifyEmail"),
inputs = document.querySelectorAll(".otp-group input");
nextButton = document.querySelector(".nextButton"),
verifyButton = document.querySelector(".verifyButton");
let OTP = "";

const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    if(re.test(email)){
        nextButton.classList.remove("disable");
    } else {
        nextButton.classList.add("disable");
    }
};

if (emailAddress) {
    emailAddress.addEventListener("input", () => {
        validateEmail(emailAddress.value);
    });
}

window.addEventListener("load", () => {
    emailjs.init("5udz27m3cYizDoTFt");
    step2.style.display="none";
    step3.style.display="none";
    nextButton.classList.add("disable");
    verifyButton.classList.add("disable");
});

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

inputs.forEach((input) => {
    input.addEventListener("keyup", function(e) {
        if(this.value >= 1){
            e.target.value = e.target.value.substr(0, 1);
        }

        if(inputs[0].value !== "" && inputs[1].value !== "" && inputs[2].value !== "" && inputs[3].value !== "") {
            verifyButton.classList.remove("disable");
        } else {
            verifyButton.classList.add("disable");
        }
    });
});


const serviceID = "service_nae1nmk";
const templateID = "template_rk66w1g";
nextButton.addEventListener("click", () => {
    OTP = generateOTP();
        nextButton.innerHTML="&#9889; Sending...";
    let templateParameter = {
        message: OTP,
        reply_to: emailAddress.value,
    };
    emailjs.send(serviceID,templateID, templateParameter).then((res) =>{
        console.log(res);
        nextButton.innerHTML="Submit";
        step1.style.display="none";
        step2.style.display="block";
        step3.style.display="none";
    }, (err)=>{
        console.log(err);
    });
});

verifyButton.addEventListener("click", () => {
    let values = "";
    inputs.forEach((input) =>{
        values += input.value;
    });
    if(OTP == values) {
        step1.style.display="none";
        step2.style.display="none";
        step3.style.display="block";
    } else {

        setTimeout(() => {
            verifyButton.classList.add("error-shake");
        })
    }
});

function changeMyEmail() {
    step1.style.display="block";
    step2.style.display="none";
    step3.style.display="none";
};

