<?php

require 'vendor/autoload.php';


use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler( __DIR__ . '/logs/app.log', Logger::WARNING));

// add records to the log
$log->warning('Foo');
$log->error('Bar');




printf('<h1>%s</h1>', __FILE__ );


#/ITI0205_2020/lecture_12/hei-hei
$uri = $_SERVER['REQUEST_URI'];
$base = '/ITI0205_2020/lecture_12';

$page = substr($uri, strlen($base) + 1);
echo $page;

switch($page) {
	case 'hei-hei':
		include('info.php');
	break;
	default:
		//Redirect to 404 page
	break;
}
