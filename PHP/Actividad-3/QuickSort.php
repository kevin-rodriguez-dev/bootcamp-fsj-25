<?php

class Sorting
{
    public function quickSort($arr)
    {
        $length = count($arr);

        if ($length <= 1) {
            return $arr;
        }

        $pivot = $arr[$length - 1];
        $left = $right = [];

        for ($i = 0; $i < $length - 1; $i++) {
            if ($arr[$i] < $pivot) {
                $left[] = $arr[$i];
            } else {
                $right[] = $arr[$i];
            }
        }

        return array_merge(
            $this->quickSort($left),
            [$pivot],
            $this->quickSort($right)
        );
    }

    public function test()
    {
        $arr = [64, 34, 25, 12, 22, 11, 90];
        echo "Array original: " . implode(", ", $arr) . "\n";

        $sortedArr = $this->quickSort($arr);
        echo "Array ordenado: " . implode(", ", $sortedArr) . "\n";
    }
}

$sorter = new Sorting();
$sorter->test();
