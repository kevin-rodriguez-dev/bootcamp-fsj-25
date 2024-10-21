export abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
    edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log("Es mayor de edad.");
        } else {
            console.log("No es mayor de edad.");
        }
    }

    abstract mostrarDatos(): void;
}
