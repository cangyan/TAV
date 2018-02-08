<?php

class TestObject
{
    public $subject;
    private $message = 'test' . PHP_EOL;

    public function testObject()
    {
        echo $this->message;
    }
}

$instance = new TestObject();
$instance->testobject();