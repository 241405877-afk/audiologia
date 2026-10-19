
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();

    respuesta.textContent =
        "¡Gracias, " + nombre +
        "! Tu formulario se completó correctamente.";

    formulario.reset();
});
