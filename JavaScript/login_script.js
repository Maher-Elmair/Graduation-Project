function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (validateLogin(username, password)) {
        if (authenticateUser(username, password)) {
            alert('Login successful!');
            redirectToHomePage();
        } else {
            alert('Incorrect username or password.');
        }
    }
}

function validateLogin(username, password) {
    if (!username || !password) {
        alert('Please enter both username and password.');
        return false;
    }

    return true;
}

function authenticateUser(username, password) {
    // Assuming users array contains user objects with usernames and passwords
    return users.some(user => user.username === username && user.password === password);
}

function redirectToHomePage() {
    // Redirect to the home page
    // window.location.href = "Html/home.html"; // Replace 'home.html' with the URL of your home page
    const loginForm = document.getElementById("login-form");
    const OpenBtn = document.createElement("button");
    loginForm.insertBefore(OpenBtn, loginForm.children[4]);
    OpenBtn.innerHTML =
        `
        <a href="Html/home.html" class="open-btn">Open Home Page</a>
        `;
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (validateRegistration(username, password, confirmPassword)) {
        addUser(username, password);
        clearInputFields();
        alert('Registration successful!');
        redirectToLoginPage();
    }
}

function validateRegistration(username, password, confirmPassword) {
    if (!username || !password || !confirmPassword) {
        alert('Please enter all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    if (isUsernameTaken(username)) {
        alert('Username is already taken. Please choose a different one.');
        return false;
    }

    if (!isPasswordStrongEnough(password)) {
        alert('Password should be at least 8 characters long.');
        return false;
    }

    return true;
}

function isUsernameTaken(username) {
    return users.some(user => user.username === username);
}

function isPasswordStrongEnough(password) {
    // Minimum password length requirement of 8 characters
    return password.length >= 8;
}

function clearInputFields() {
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('confirm-password').value = '';
}

function redirectToLoginPage() {
    // Redirect to the login page
    showLoginForm()
    // window.location.href = '../index.html'; // Replace 'login.html' with the URL of your login page
}




// Add this function to toggle between login and registration forms
function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Add this function to toggle password visibility
function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
}


// Add this function to check password strength and update the password strength meter
function checkPasswordStrength() {
    const password = document.getElementById('register-password').value;
    const strengthMeter = document.getElementById('password-strength-meter');
  
    // Calculate password strength (for simplicity, this is a basic example)
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]/)) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
  
    // Update password strength meter
    switch (strength) {
      case 0:
        strengthMeter.className = 'password-strength-weak';
        break;
      case 1:
        strengthMeter.className = 'password-strength-medium';
        break;
      case 2:
      case 3:
      case 4:
        strengthMeter.className = 'password-strength-strong';
        break;
      default:
        strengthMeter.className = '';
    }
  }
  