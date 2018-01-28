<?php

$data = "hello";
$loop = 100000;
$results = [];

// hash算法
foreach (hash_algos() as $algo) {
    $total = 0;
    for ($i=0; $i < $loop; $i++) {
        $begin = microtime(true);
        $hashed = hash($algo, $data, false);
        $total += microtime(true) - $begin;
    }
    $results[] = [
        'name'   => $algo,
        'time'   => $total,
        'hashed' => $hashed,
    ];
}

// 结果按速度进行排序
usort($results, function($a, $b) {
    return $a['time'] <=> $b['time'];
});

// 结果展示
foreach ($results as $result) {
    printf("%-16s %01.4f %s\n", $result['name'], $result['time'], $result['hashed']);
}