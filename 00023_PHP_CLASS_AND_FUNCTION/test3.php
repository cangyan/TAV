<?php

class Test_Object
{
    public $subject = 'subject' . PHP_EOL;
    private $message = 'test' . PHP_EOL;

    public function test_object()
    {
        echo $this->message;
    }

    public function test_subject()
    {
        echo $this->subject;
    }
}

$instance = new Test_Object();
$instance->test_object();
$instance->test_subject();