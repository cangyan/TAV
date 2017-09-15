<?php
function check($arr)
{
    asort($arr);
    $arr = array_values($arr);
    $arr[0] += 1;
    return array_reduce($arr, function ($carry, $item) {
        $carry *= $item;
        return $carry;
    }, 1);
}

echo check(array(1000, 999, 998, 997, 996, 995));