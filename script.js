// Obtenemos el botón y el cuerpo del documento
const modoOscuroBtn = document.getElementById('modoOscuroBtn');
const body = document.body;

// Añadimos un evento 'click' al botón
modoOscuroBtn.addEventListener('click', () => {
    // Alternamos la clase 'modo-oscuro' en el cuerpo
    body.classList.toggle('modo-oscuro');
    // Cambiamos el texto del botón según el estado
    if (body.classList.contains('modo-oscuro')) {
        modoOscuroBtn.textContent = 'Desactivar Modo Oscuro'; // Cambiamos el texto del botón
    } else {
        modoOscuroBtn.textContent = 'Activar Modo Oscuro'; // Cambiamos el texto del botón
    }
});