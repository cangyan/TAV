<?php

require("TestCase.php");

class SpeedTest extends TestCase
{
    public function testCollection()
    {
        collect(range(1, 1500000))->map(function ($value) {
            return $value * 2;
        })->filter(function ($value) {
            return $value > 10000;
        });
    }

    public function testForeach()
    {
        $double_me = [];
        foreach (range(1, 1500000) as $value) {
            $double_me[] = $value * 2;
        }
        $filter_me = [];
        foreach ($double_me as $key => $value) {
            if ($value > 10000) {
                $filter_me[$key] = $value;
            }
        }
    }
}
