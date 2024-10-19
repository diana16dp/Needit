// Función para mostrar la pregunta y ocultar el carrusel e imagen de fondo
function empezar() {
    const inicio = document.getElementById('inicio');
    const preguntaUso = document.getElementById('pregunta-uso');

    // Ocultar el carrusel e imagen de fondo
    inicio.classList.add('hidden');

    // Mostrar la sección de pregunta
    preguntaUso.classList.remove('hidden');
}

// Función para manejar la selección del uso y mostrar la sección correspondiente
function seleccionarUso(uso) {
    // Ocultar la sección de pregunta
    const preguntaUso = document.getElementById('pregunta-uso');
    preguntaUso.classList.add('hidden');

    // Mostrar la sección correspondiente según la opción seleccionada
    const secciones = {
        'Gamer': document.getElementById('gamer-section'),
        'Office': document.getElementById('office-section'),
        'Diseño': document.getElementById('diseno-section'),
        'School': document.getElementById('school-section')
    };

    secciones[uso].classList.remove('hidden');
}

// Función para volver a la pantalla de inicio (carrusel)
function volver() {
    // Ocultar todas las secciones
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('gamer-section').classList.add('hidden');
    document.getElementById('office-section').classList.add('hidden');
    document.getElementById('diseno-section').classList.add('hidden');
    document.getElementById('school-section').classList.add('hidden');

    // Mostrar la pag anterior
    document.getElementById('pregunta-uso').classList.remove('hidden');
}
// Función para volver al carrusel desde la sección de pregunta-uso
function volverAlCarrusel() {
    // Ocultar la sección de pregunta-uso
    document.getElementById('pregunta-uso').classList.add('hidden');

    // Mostrar el carrusel de inicio
    document.getElementById('inicio').classList.remove('hidden');
}

// Ejecutar el carrusel cuando la página esté cargada
window.onload = function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-container img');
    const totalImages = images.length;

    function showNextImage() {
        // Ocultar la imagen actual
        images[currentImageIndex].classList.remove('active');

        // Cambiar al siguiente índice
        currentImageIndex = (currentImageIndex + 1) % totalImages;

        // Mostrar la nueva imagen
        images[currentImageIndex].classList.add('active');
    }

    // Cambiar imagen cada 3 segundos
    setInterval(showNextImage, 3000);
};
