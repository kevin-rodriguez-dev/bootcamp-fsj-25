<?php

function generarFibonacci($n)
{
    // Validar si n es <= a 0
    if ($n <= 0)
        return [];

    // Inicializamos un [] para almacenar el comienzo de la serie
    $serie = [0, 1];

    for ($i = 2; $i < $n; $i++) {
        $serie[] = $serie[$i - 1] + $serie[$i - 2];
    }

    return $serie;
}

//$n = ; Agregar un número
echo "Los primeros $n términos de la serie Fibonacci son: ";
print_r(generarFibonacci($n));

function esPrimo($n)
{
    // Validar si n es <= a 1
    if ($n <= 1)
        return false;

    for ($i = 2; $i <= $n / 2; $i++) {
        if ($n % $i == 0) {
            return false; // Si es divisible, no es primo 
        }
    }
    return true; // Si no es divisible, no es primo
}

//$n = ; Agregar un número
$esPrimo = esPrimo($n) ?  "$n es un número primo" :  "$n no es un número primo";
echo $esPrimo;

function esPalindromo($txt)
{
    // Limpiamos la cadena de espacios y la convertimos a minusculas
    $txt = strtolower(str_replace(' ', '', $txt));

    // Comparar la cadena con su versión invertida
    return $txt == strrev($txt);
}

//$txt = ""; Agregar una cadena de texto

$cadena = esPalindromo($txt) ?  "\"$txt\" es un palíndromo" :  "\"$txt\" no es un palíndromo";
echo $cadena;
