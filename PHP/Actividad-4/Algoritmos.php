<?php

function bubbleSort($arr)
{
    $length = count($arr);

    for ($i = 0; $i < $length - 1; $i++) {
        for ($j = 0; $j < $length - $i - 1; $j++) {
            if ($arr[$j] < $arr[$j + 1]) {
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }
        }
    }

    return $arr;
}

$argc = [5, -3, 8, -3, 7, 0, 8, -1, 4, -5, 2];
echo "Original: " . implode(", ", $argc) . "\n";
echo "Lista ordenada: " . implode(", ", bubbleSort($argc)) . "\n";

function mergeSort($arr)
{
    $length = count($arr);

    if ($length <= 1) return $arr;

    $mid = floor($length / 2);

    $left = array_slice($arr, 0, $mid);
    $right = array_slice($arr, $mid);

    $left = mergeSort($left);
    $right = mergeSort($right);

    return merge($left, $right);
}

function merge($left, $right)
{
    $result = [];

    while (count($left) > 0 && count($right) > 0) {
        if ($left[0] <= $right[0]) {
            array_push($result, array_shift($left));
        } else {
            array_push($result, array_shift($right));
        }
    }

    while (count($left) > 0) {
        array_push($result, array_shift($left));
    }

    while (count($right) > 0) {
        array_push($result, array_shift($right));
    }

    return $result;
}

$argc = ["zorro", "elefante", "gato", "perro", "abeja", "jirafa", "delfín", "ballena", "canario"];

echo "Original: " . implode(", ", $argc) . "\n";
echo "Lista ordenada: " . implode(", ", mergeSort($argc)) . "\n";

function insertionSort($arr)
{
    $length = count($arr);

    if ($length <= 1) return $arr;

    for ($i = 1; $i < $length; $i++) {
        $key = $arr[$i];

        $j = $i - 1;
        while ($j >= 0 && $arr[$j] > $key) {
            $arr[$j + 1] = $arr[$j];
            $j--;
        }
        $arr[$j + 1] = $key;
    }
    return $arr;
}

$argc = ["Diego", "Erick", "Luis", "Kevin", "Karla", "Julio", "Gustavo", "Daniel"];

echo "Original: " . implode(", ", $argc) . "\n";
echo "Lista ordenada: " . implode(", ", insertionSort($argc)) . "\n";
