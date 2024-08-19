// Este archivo es opcional si ya estás manejando el cierre de sesión desde `index.js`
document.addEventListener('DOMContentLoaded', () => {
    // Eliminar los datos de autenticación del localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');

    // Redirigir al usuario a la página de inicio de sesión
    alert('Has cerrado sesión exitosamente.');
    window.location.href = 'login.html';
});
