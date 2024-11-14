let precioTotalGamer = 0;
let subcategoriaActual = 1; // Índice de subcategoría actual

// Función para iniciar la configuración ocultando el carrusel e imagen de fondo
function empezar() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('pregunta-uso').classList.remove('hidden');
}

// Función para manejar la selección del uso y mostrar la sección correspondiente
function seleccionarUso(uso) {
    document.getElementById('pregunta-uso').classList.add('hidden');
    if (uso === 'Gamer') {
        document.getElementById('gamer-section').classList.remove('hidden');
        document.getElementById('gamer-subsection-1').classList.remove('hidden');
    }
}

function volver() {
    document.getElementById('pregunta-uso').classList.remove('hidden');
    document.getElementById('gamer-section').classList.add('hidden');
    ocultarTodasSubcategorias();
}

// Función para volver al carrusel desde la sección de pregunta-uso
function volverAlCarrusel() {
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('inicio').classList.remove('hidden');
}

// Función para seleccionar un item en la sección gamer y actualizar el precio total
function seleccionarItem(item, precio) {
    item.classList.toggle('selected');
    precioTotalGamer += item.classList.contains('selected') ? precio : -precio;
    document.getElementById('precio-gamer-total').textContent = `Precio total: $${precioTotalGamer}`;
}

// Función para mostrar la siguiente subcategoría
function mostrarSiguienteSubcategoria() {
    if (subcategoriaActual < 8) {
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.add('hidden');
        subcategoriaActual++;
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.remove('hidden');
    } else {
        finalizarConfiguracion(); // Llamar a la función final cuando se llegue al último
    }
}

// Función para mostrar la subcategoría anterior
function mostrarSubcategoriaAnterior() {
    if (subcategoriaActual > 1) {
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.add('hidden');
        subcategoriaActual--;
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.remove('hidden');
    }
}

// Ocultar todas las subcategorías
function ocultarTodasSubcategorias() {
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`gamer-subsection-${i}`).classList.add('hidden');
    }
}

// Función para finalizar la configuración y mostrar el precio total acumulado
function finalizarConfiguracion() {
    alert(`La configuración ha finalizado. Precio total: $${precioTotalGamer}`);
}

// Ejecutar el carrusel cuando la página esté cargada
window.onload = function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-container img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);
};
