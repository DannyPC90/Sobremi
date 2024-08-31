// scripts.js

// Validación del formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario si hay errores
    let errores = false;

    // Validar nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        errores = true;
    }

    // Validar correo electrónico
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        errores = true;
    }

    // Validar mensaje
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        errores = true;
    }

    if (errores) {
        event.preventDefault(); // Detener el envío del formulario si hay errores
    } else {
        alert('Formulario enviado con éxito');
    }
});
