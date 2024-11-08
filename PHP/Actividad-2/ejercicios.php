<?php

function listaInvertida($arr)
{
    return array_reverse($arr);
}

$arr = [];
print_r(listaInvertida($arr));


function sumarPares($arr)
{
    $resultado = null;

    foreach ($arr as $value) {
        if ($value % 2 == 0) {
            $resultado += $value;
        }
    }

    return $resultado;
}

$arr = [];
$suma = sumarPares($arr);

echo "La suma total de todos los números pares da como resultado: $suma";

function frecuencia($txt)
{
    $frecuencia  = [];

    for ($i = 0; $i < strlen($txt); $i++) {
        $caracter = $txt[$i];
        if (isset($frecuencia[$caracter])) {
            $frecuencia[$caracter]++;
        } else {
            $frecuencia[$caracter] = 1;
        }
    }
    return $frecuencia;
}

$txt = "";

print_r(frecuencia($txt));

function bucleAnidado($altura)
{
    for ($i = 1; $i <= $altura; $i++) {
        // Imprimir espacios en blanco
        $espacios = $altura - $i;
        while ($espacios > 0) {
            echo " ";
            $espacios--;
        }

        // Imprimir asteriscos
        $asteriscos = 2 * $i - 1;
        while ($asteriscos > 0) {
            echo "*";
            $asteriscos--;
        }

        echo "\n";
    }
}

bucleAnidado(5);