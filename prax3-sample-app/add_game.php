<?php

require_once 'vendor/autoload.php';

require_once 'config/app.php';
require_once 'includes/db.php';
require_once 'includes/utils.php';

$loader = new Twig\Loader\FilesystemLoader('views');
$twig =  new Twig\Environment($loader);

$studios = db_get_list('SELECT id, name FROM studios ORDER BY name');
$genres = db_get_list('SELECT id, name FROM genres ORDER BY name');

$errors = [];


/**
 * We have defined a function post($key) in utils.php
 *
 * The full code for this IF condition would be:
 * if(isset($_POST['action'] && 'add' == $_POST['action'])
 *
 */
if('add' == post('action')) {
    /**
     * Now we prepare the data we expect from user.
     * Besides parsing the input with escape() function
     * we have defined we verify here it is of certain type.
     *
     * Here we could write a function validate($input_arr, $validation_rules)
     * if we want to be efficient, but for learing purposes
     * we just use our own wrappers
     *
     */

    /* we read, sanitize and optionally cast the data */
    $name = post('name');
    $studio_id = (int)post('studio_id');
    $genre_id = (int)post('genre_id');

    /* now we do input validation, doing it on frontend side is not enough */
    if(false == $name) {
        $errors['name'] = 'Please enter name';
    }

    /*
     * For DB insert with prepared statements example check 'add_studio.php' file
     * We construct a query with sptrinf() function here
     */
    $query = 'INSERT INTO games(name, studio_id, genre_id) VALUES(%s,%d,%d)';
    $query = sprintf($query);

    /**
     * We execute the query and crash on error, it could also be done gracefully
     * by reading the query result to variable and assign it then to errors.
     */
    mysqli_query(db(), $query) or die(mysqli_error(db()));




}





echo $twig->render('add_game.twig', ['errors' => $errors, 'studios' => $studios, 'genres' => $genres]);
