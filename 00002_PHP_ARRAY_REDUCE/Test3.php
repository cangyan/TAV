<?php
function check($arr)
{
    sort($arr);
    $arr[0] += 1;
    return array_product($arr);
}

echo check(array(1000, 999, 998, 997, 996, 995));