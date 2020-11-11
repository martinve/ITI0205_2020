<?php

require_once 'vendor/autoload.php';

require_once 'config/app.php';
require_once 'includes/db.php';
require_once 'includes/utils.php';

$loader = new Twig\Loader\FilesystemLoader('views');
$twig =  new Twig\Environment($loader);


if('add' == post('action')) {

    /**
     * We are intentionally using the long to version to prepare
     * user input here, you could also use wrap the same in
     * escape() function ()
     *
     */

    $name = db()->real_escape_string($_POST['name']);
    $name = trim($name);


    /**
     * Here is the example of doing inserts with prepared statements.
     * This is the most secure - but also the longest way to write the
     * queries.
     */

    $query = 'INSERT INTO studios(name) VALUES(?)';
    $stmt = db()->prepare($query);

    if(!$stmt) {
        die('Error in DB query: ' .  db()->error);
    }

    $stmt->bind_param('s', $name);
    if($stmt->execute()) {
        //TODO: Show message and redirect
    } else {
        die('You have error in your query: ' . $stmt->error);
    }
}




echo $twig->render('add_studio.twig');
