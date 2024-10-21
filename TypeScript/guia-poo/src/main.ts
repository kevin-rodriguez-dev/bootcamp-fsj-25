import './style.css'
import { CabeceraPagina } from './classes/CabeceraPagina.ts'
import { Calculadora } from './classes/Calculadora.ts'
import { Cancion } from './classes/Cancion.ts'
import { Cuenta } from './classes/Cuenta.ts'
import { Empleado } from './classes/Empleado.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Ejercicios de Programación Orientada a Objetos con TypeScript</h1>
    <p>Abre la consola del navegador para ver los resultados de los ejercicios.</p>
  </div>
`

// Ejercicio 1
const cabecera = new CabeceraPagina("Mi Página Web", "azul", "Arial")
cabecera.establecerAlineacion("centrado")
cabecera.imprimirPropiedades()

// Ejercicio 2
const calc = new Calculadora()
console.log("Suma: ", calc.sumar(5, 3))
console.log("Factorial de 5: ", calc.factorial(5))

// Ejercicio 3
const cancion = new Cancion("Bohemian Rhapsody", "Rock")
cancion.setAutor("Queen")
cancion.mostrarDatos()

// Ejercicio 4
const cuenta = new Cuenta("Juan Pérez", 1000, "Ahorro", "123456789")
cuenta.depositar(500)
cuenta.retirar(200)
cuenta.mostrarDatos()

// Ejercicio 5
const empleado = new Empleado("Kevin", "Rodríguez", "La Libertad", "+503 2555-0500", 21, 850)
//empleado.cargarSueldo(3000)
empleado.mostrarDatos()

