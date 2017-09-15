<?php
$numbers = array(1000, 999, 998, 997, 996, 995);
$target1 = 0;
for ($y = 0; $y < count($numbers); $y++) {
    $target2 = 1;
    $numbers[$y] = $numbers[$y] + 1;
    for ($i = 0; $i < count($numbers); $i++) {
        $target2 = $target2 * $numbers[$i];
    }
    $numbers[$y] = $numbers[$y] - 1;
    if ($target1 < $target2) {
        $target1 = $target2;
    }
}
echo $target1;
