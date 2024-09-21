document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("./components/header.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la red");
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById("header").innerHTML = data;
        })
        .catch((error) => console.error("Error al cargar el header:", error));

    // Cambiar el contenido del título
    const titulo = document.querySelector("h1");
    if (titulo) {
        titulo.innerHTML = "ADVAR<br>IN-EAR<br>HEADPHONES";
    }

    // Cargar el footer
    fetch("./components/footer.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la red");
            }
            return response.text();
        })
        .then((data) => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch((error) => console.error("Error al cargar el footer:", error));
});
