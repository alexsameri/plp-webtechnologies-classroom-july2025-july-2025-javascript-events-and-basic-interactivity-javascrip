function toggleTheme() {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.classList.toggle("dark");
}

const button = document.getElementById('loginBtn');
const form = document.getElementById('form');
const username = document.getElementById('username');
const errorMessage = document.getElementById('errorMessage');
const password = document.getElementById('password');
form.addEventListener('click', function(e) {
    if (!username.value || !password.value) {
        e.preventDefault();
        errorMessage.textContent = 'Username and password required';
    } else {
        alert('Login successful');
    }
});
