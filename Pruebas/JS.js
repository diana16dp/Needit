/*function actualizarSeleccion() {
    // Obtener los selectores de los componentes
    const gabinete = document.getElementById('gabinete');
    const procesador = document.getElementById('procesador');
    const ram = document.getElementById('ram');
    const video = document.getElementById('video');

    // Obtener los precios de los componentes seleccionados
    const precioGabinete = Number(gabinete.options[gabinete.selectedIndex].getAttribute('data-price'));
    const precioProcesador = Number(procesador.options[procesador.selectedIndex].getAttribute('data-price'));
    const precioRAM = Number(ram.options[ram.selectedIndex].getAttribute('data-price'));
    const precioVideo = Number(video.options[video.selectedIndex].getAttribute('data-price'));

    // Actualizar los resúmenes
    document.getElementById('gabinete-resumen').innerText = gabinete.value || "No seleccionado";
    document.getElementById('procesador-resumen').innerText = procesador.value || "No seleccionado";
    document.getElementById('ram-resumen').innerText = ram.value || "No seleccionado";
    document.getElementById('video-resumen').innerText = video.value || "No seleccionado";

    // Calcular el total
    const total = precioGabinete + precioProcesador + precioRAM + precioVideo;
    document.getElementById('total').innerText = total;
}

function comprar() {
    alert("Gracias por tu compra. Tu PC ha sido configurada.");
}*/
