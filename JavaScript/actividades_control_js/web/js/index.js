// ACTIVIDAD 2: GUIA ESTRUCTURAS DE CONTROL JAVASCRIPT

/**
 * Ejercicio 1
 *
 */
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

/**
 * Ejercicio 2
 *
 */
function calcularNotaFinal(examen, tareas, asistencia, investigacion, nombre, carnet) {
    let notaFinal;

    notaFinal = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;

    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota final: ${notaFinal}`;
}

/**
 * Ejercicio 3
 *
 */
function calcularAumento(nombre, salario, categoria) {
    let aumento;
    let nuevoSalario;

    switch (categoria) {
        case "A":
            aumento = salario * 0.15;
            break;
        case "B":
            aumento = salario * 0.3;
            break;
        case "C":
            aumento = salario * 0.1;
            break;
        case "D":
            aumento = salario * 0.2;
            break;
        default:
            return "Categoría no válida";
    }

    nuevoSalario = salario + aumento;

    return `Nombre: ${nombre}, Salario: ${nuevoSalario}, Aumento: ${aumento}`;
}

/**
 * Ejercicio 4
 *
 */

function numeroMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
