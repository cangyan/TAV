<?php

class Test_Object
{
    public $subject = 'subject' . PHP_EOL;
    private $message = 'test' . PHP_EOL;

    public function testMessage()
    {
        echo $this->message;
    }
}

$instance = new Test_Object();
$instance->testMessage();