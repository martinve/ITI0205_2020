<?php
require_once 'vendor/autoload.php';

require_once 'config/app.php';
require_once 'includes/db.php';
require_once 'includes/auth.php';

$loader = new Twig\Loader\FilesystemLoader('views');
$twig =  new Twig\Environment($loader, ['debug' => true]);

$twig->addGlobal('auth_user', auth_get_user() );


$twig->addExtension(new \Twig\Extension\DebugExtension());

$games = db_get_list('SELECT * FROM games ORDER BY name');


echo $twig->render('index.html', ['games' => $games]);
