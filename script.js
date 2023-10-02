const form = document.querySelector("form"),
emailField = form.querySelector(".email-field"),
emailInput = emailField.querySelector(".email"),
passwordField = form.querySelector(".create-password"),
passwordInput = passwordField.querySelector('.password'),
confirmPasswordField = form.querySelector('.confirm-password'),
confirmPasswordInput = confirmPasswordField.querySelector('.confirm_password');

function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// EyesIcons 
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcons) => {
    eyeIcons.addEventListener('click', ()=> {
        const pInput = eyeIcons.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcons.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcons.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
});

// Create Password

function createPass() {
    const passPattern = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordInput.value.match(passPattern)) {
        return passwordField.classList.add("invalid");
    }
    passwordField.classList.remove("invalid");
}

// Confirm Password

function confirmPass() {
    if (passwordInput.value !== confirmPasswordInput.value || confirmPasswordInput.value === "") {
        return confirmPasswordField.classList.add("invalid");
    }
    confirmPasswordField.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();

    emailInput.addEventListener("Keyup", checkEmail);
    passwordInput.addEventListener("Keyup", createPass);
    confirmPasswordInput.addEventListener("Keyup", confirmPass);

    if (
        !emailField.classList.contains("invalid") &&
        !passwordField.classList.contains("invalid") &&
        !confirmPasswordField.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});