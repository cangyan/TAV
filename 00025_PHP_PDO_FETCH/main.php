<?php
$pdo = new PDO('mysql:host=127.0.0.1;dbname=hoge_db;port=33062', 'root', 'pass');

// 性能检测脚本
function profile($text, $f) {
    $testCount = 5000; // 試行回数
    $totalTime = .0;
    for($i = 0; $i < $testCount; ++$i){
        $start = microtime(true);
        $rows = $f();
        $end = microtime(true);
        $time = $end - $start;
        $totalTime += $time;
    }
    $avg = $totalTime / $i;
    printf("$text [ avg ] %1.6f [total] %3.6f \n", $avg, $totalTime);
}

// fetch 测试表映射类
class FetchClass {
    public $id;
    public $name;
    public $created_at;
    public $updated_at;
}

// 1 : 按行读取+返回一个索引为结果集列名的数组
profile("fetch    ASSOC", function() use ($pdo) {
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $st->execute();
    $rows = [];
    while($row = $st->fetch()){
        $rows[] = $row;
    }
    return $rows;
});

// 2 : 按行读取+返回一个属性名对应结果集列名的匿名对象
profile("fetch    OBJ  ", function() use ($pdo) {
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_OBJ);
    $st->execute();
    $rows = [];
    while($row = $st->fetch()){
        $rows[] = $row;
    }
    return $rows;
});

// 3 : 按行读取+返回一个请求类的新实例，映射结果集中的列名到类中对应的属性名。如果 fetch_style 包含 PDO::FETCH_CLASSTYPE（例如：PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE），则类名由第一列的值决定
profile("fetch    CLASS", function() use ($pdo){
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_CLASS, 'FetchClass');
    $st->execute();
    $rows = [];
    while($row = $st->fetch()){
        $rows[] = $row;
    }
    return $rows;
});

// 4 : 按行读取+更新一个被请求类已存在的实例，映射结果集中的列到类中命名的属性
profile("fetch    INTO ", function() use ($pdo){
    $st = $pdo->prepare('select * from account');
    $fetchCls = new FetchClass;
    $st->setFetchMode(PDO::FETCH_INTO, $fetchCls);
    $st->execute();
    $rows = [];
    while($row = $st->fetch()){
                $rows[] = clone $row;
        }
    return $rows;
});

// 5 : 全部读取+返回一个索引为结果集列名的数组
profile("fetchAll ASSOC", function() use ($pdo) {
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $st->execute();
    $rows = $st->fetchAll();
    return $rows;
});

// 6 : 全部读取+返回一个属性名对应结果集列名的匿名对象
profile("fetchAll OBJ  ", function() use ($pdo) {
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_OBJ);
    $st->execute();
    $rows = $st->fetchAll();
    return $rows;
});

// 7 : 全部读取+返回一个请求类的新实例，映射结果集中的列名到类中对应的属性名
profile("fetchall CLASS", function() use ($pdo){
    $st = $pdo->prepare('select * from account');
    $st->setFetchMode(PDO::FETCH_CLASS, 'FetchClass');
    $st->execute();
    $rows = $st->fetchAll();
    return $rows;
});