const validUsers = [
    {username: "admin", password: "12345"},
    {username: "user", password: "password"}
];

const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const errorMessage = document.getElementById("errorMessage");
function login(){
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = validUsers.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.textContent = "";
        alert('Bienvenido, ${username}!');
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
}

togglePassword.addEventListener("mouseleave", () => {
    passwordField.type = "password";
    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash")
});

togglePassword.addEventListener("mouseenter", () => {
    passwordField.type = "text";
    togglePassword.classList.toggle("fa-eye-slash");
    togglePassword.classList.toggle("fa-eye")
});
