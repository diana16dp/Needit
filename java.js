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
