export class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(cantidad: number): void {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += cantidad;
            console.log(`Se ha depositado correctamente $${cantidad}.`);
        }
    }

    retirar(valor: number): void {
        if (valor > this.cantidad) {
            console.log("No hay suficiente efectivo en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else {
            this.cantidad -= valor;
            console.log(`Se ha retirado $${valor}. Quedan $${this.cantidad} en la cuenta.`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}, Tipo de Cuenta: ${this.tipoCuenta}, Número de Cuenta: ${this.numeroCuenta}`);
    }
}
