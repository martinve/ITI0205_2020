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
 * We first read the game to be edited
 */
$game_id = (int)get('id');

$query = 'SELECT * FROM games WHERE id=%d';
$query = sprintf($query, $game_id);

$res = mysqli_query(db(), $query) or die(mysqli_error(db()));
$game = mysqli_fetch_object($res);

if(!$game) {
    //Show error here if game does not exist that we want to edit
}

/**
 * We have defined a function post($key) in utils.php
 *
 * The full code for this IF condition would be:
 * if(isset($_POST['action'] && 'add' == $_POST['action'])
 *
 */
if('edit' == post('action')) {
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
    $name = escape($name);

    $game_id = (int)post('game_id');
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
    $query = 'UPDATE games SET name="%s", studio_id="%s", genre_id="%s" WHERE id=%d';
    $query = sprintf($query, $name, $studio_id, $genre_id, $game_id);

    /**
     * We execute the query and crash on error, it could also be done gracefully
     * by reading the query result to variable and assign it then to errors.
     */
    mysqli_query(db(), $query) or die(mysqli_error(db()));


    redirect('index.php');



}





echo $twig->render('edit_game.twig', ['game' => $game, 'errors' => $errors, 'studios' => $studios, 'genres' => $genres]);
