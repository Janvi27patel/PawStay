document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`Logging in with email: ${email}, password: ${password}`);
    // Add actual authentication logic here
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    console.log(`Registering with username: ${username}, email: ${email}, password: ${password}`);
    // Add actual registration logic here
});
