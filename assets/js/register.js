// Registro Contrasena
function ojoContrasena(id) {
    const passwordInput = document.getElementById(id);
    const toggleIcon = passwordInput.nextElementSibling;

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
} 


// Validar Email 
document.getElementById('RegistroForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
        emailInput.style.borderColor = '#2F80ED';
        event.preventDefault(); 
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = '';
    }
});
