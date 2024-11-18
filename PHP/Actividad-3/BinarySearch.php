<?php

class Search
{
    public function binarySearch($arr, $target)
    {
        $left = 0;
        $right = count($arr) - 1;

        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);

            if ($arr[$mid] == $target) {
                return $mid;
            }

            if ($arr[$mid] < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return -1; // Elemento no encontrado
    }

    public function test()
    {
        $arr = [2, 3, 4, 10, 40, 50, 60, 70];
        $target = 10;

        echo "Array: " . implode(", ", $arr) . "\n";
        echo "Buscando el elemento: " . $target . "\n";

        $result = $this->binarySearch($arr, $target);
        if ($result != -1) {
            echo "Elemento encontrado en el índice: " . $result . "\n";
        } else {
            echo "Elemento no encontrado en el array\n";
        }
    }
}

$searcher = new Search();
$searcher->test();
