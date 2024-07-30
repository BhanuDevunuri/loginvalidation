const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateLogin();
});

function validateLogin() {
    let emailValue = loginEmail.value.trim();
    let passwordValue = loginPassword.value.trim();

    // Email check
    if (emailValue === '') {
        setError(loginEmail, 'Email cannot be empty');
    } else if (!emailCheck(emailValue)) {
        setError(loginEmail, 'Enter a valid email');
    } else {
        setSuccess(loginEmail);
    }

    // Password check
    if (passwordValue === '') {
        setError(loginPassword, 'Password cannot be empty');
    } else {
        setSuccess(loginPassword);
    }
}

function setError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(input) {
    let parent = input.parentElement;
    parent.classList.add('success');
    parent.classList.remove('error');
}

function emailCheck(email) {
    let emailReg = /^[a-z0-9._%+-]+@[a-z.-]+\.[a-z]{2,4}$/;
    return emailReg.test(email);
}
