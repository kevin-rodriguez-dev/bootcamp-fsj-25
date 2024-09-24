// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Ejercicio 5: Calculadora de Descuento de Coche
    document.getElementById("carForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const modeloCoche = document.getElementById("carModel").value;
        let descuento = 0;
        let nombreCoche = "";

        switch (modeloCoche) {
            case "fiesta":
                descuento = 5;
                nombreCoche = "Ford Fiesta";
                break;
            case "focus":
                descuento = 10;
                nombreCoche = "Ford Focus";
                break;
            case "escape":
                descuento = 20;
                nombreCoche = "Ford Escape";
                break;
        }

        document.getElementById("carResult").innerHTML = `
            <p>Coche seleccionado: ${nombreCoche}</p>
            <p>Descuento: ${descuento}%</p>
        `;
    });

    // Ejercicio 7: Análisis de Números
    document.getElementById("numberForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const numeros = document.getElementById("numbers").value.split(",").map(Number);
        let negativos = 0,
            positivos = 0,
            multiplos15 = 0,
            sumaPares = 0;

        numeros.forEach((num) => {
            if (num < 0) negativos++;
            if (num > 0) positivos++;
            if (num % 15 === 0) multiplos15++;
            if (num % 2 === 0) sumaPares += num;
        });

        document.getElementById("numberResult").innerHTML = `
            <p>Números negativos: ${negativos}</p>
            <p>Números positivos: ${positivos}</p>
            <p>Múltiplos de 15: ${multiplos15}</p>
            <p>Suma de números pares: ${sumaPares}</p>
        `;
    });

    // Ejercicio 8: Tabla de Multiplicar
    document.getElementById("multiplicationForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const multiplicador = parseInt(document.getElementById("multiplier").value);
        let tabla = '<table class="table table-striped"><thead><tr><th>Multiplicador</th><th>Resultado</th></tr></thead><tbody>';

        for (let i = 1; i <= 10; i++) {
            tabla += `<tr><td>${multiplicador} x ${i}</td><td>${multiplicador * i}</td></tr>`;
        }

        tabla += "</tbody></table>";
        document.getElementById("multiplicationResult").innerHTML = tabla;
    });

    // Ejercicio 9: Conversor de Temperatura
    document.getElementById("temperatureForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const celsius = parseFloat(document.getElementById("celsius").value);
        const fahrenheit = (celsius * 9) / 5 + 32;
        let mensaje = "";

        if (fahrenheit >= 14 && fahrenheit < 32) {
            mensaje = "Temperatura baja";
        } else if (fahrenheit >= 32 && fahrenheit < 68) {
            mensaje = "Temperatura adecuada";
        } else if (fahrenheit >= 68 && fahrenheit < 96) {
            mensaje = "Temperatura alta";
        } else {
            mensaje = "Temperatura desconocida";
        }

        document.getElementById("temperatureResult").innerHTML = `
            <p>Celsius: ${celsius}°C</p>
            <p>Fahrenheit: ${fahrenheit.toFixed(2)}°F</p>
            <p>Resultado: ${mensaje}</p>
        `;
    });

    // Ejercicio 10: Análisis de Edad de Estudiantes
    document.getElementById("ageForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const edadesMañana = document.getElementById("morningAges").value.split(",").map(Number);
        const edadesTarde = document.getElementById("afternoonAges").value.split(",").map(Number);
        const edadesNoche = document.getElementById("eveningAges").value.split(",").map(Number);

        const promedioMañana = edadesMañana.reduce((a, b) => a + b, 0) / edadesMañana.length;
        const promedioTarde = edadesTarde.reduce((a, b) => a + b, 0) / edadesTarde.length;
        const promedioNoche = edadesNoche.reduce((a, b) => a + b, 0) / edadesNoche.length;

        const promedioMasAlto = Math.max(promedioMañana, promedioTarde, promedioNoche);
        let turnoMasAlto = "";

        if (promedioMasAlto === promedioMañana) turnoMasAlto = "Mañana";
        else if (promedioMasAlto === promedioTarde) turnoMasAlto = "Tarde";
        else turnoMasAlto = "Noche";

        document.getElementById("ageResult").innerHTML = `
            <p>Promedio de edad del turno de mañana: ${promedioMañana.toFixed(2)}</p>
            <p>Promedio de edad del turno de tarde: ${promedioTarde.toFixed(2)}</p>
            <p>Promedio de edad del turno de noche: ${promedioNoche.toFixed(2)}</p>
            <p>Turno con el promedio de edad más alto: ${turnoMasAlto}</p>
        `;
    });
});