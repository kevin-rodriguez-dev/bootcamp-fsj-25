export class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("No se puede calcular el factorial de un número negativo");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}
