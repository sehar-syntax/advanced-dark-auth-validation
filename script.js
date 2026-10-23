const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
togglePassword.addEventListener('click', function () {
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
this.textContent = type === 'password' ? '👁️' : '🔒';
});
function setSuccess(input, errorElement) {
input.classList.remove('error-border');
input.classList.add('success-border');
errorElement.textContent = '';
}
function setError(input, errorElement, message) {
input.classList.remove('success-border');
input.classList.add('error-border');
errorElement.textContent = message;
}
username.addEventListener('input', function () {
if (username.value.trim().length < 5) {
setError(username, usernameError, 'Username must be at least 5 characters.');
} else {
setSuccess(username, usernameError);
}
});
email.addEventListener('input', function () {
const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailPattern.test(email.value.trim())) {
setError(email, emailError, 'Please enter a valid email address.');
} else {
setSuccess(email, emailError);
}
});
password.addEventListener('input', function () {
if (password.value.length < 8) {
setError(password, passwordError, 'Password must be at least 8 characters.');
} else {
setSuccess(password, passwordError);
}
});
form.addEventListener('submit', function (e) {
e.preventDefault();
let isValid = true;
if (username.value.trim().length < 5) {
setError(username, usernameError, 'Username must be at least 5 characters.');
isValid = false;
}
const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
if (!emailPattern.test(email.value.trim())) {
setError(email, emailError, 'Please enter a valid email address.');
isValid = false;
}
if (password.value.length < 8) {
setError(password, passwordError, 'Password must be at least 8 characters.');
isValid = false;
}
if (isValid) {
alert('Validation Successful! Ready for API Integration.');
}
});

