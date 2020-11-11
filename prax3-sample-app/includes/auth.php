<?php

require_once 'includes/db.php';

session_start();

function auth_login($user, $pass) {
    //1. Read email and password in plaintext from POST
    //2. Construct a SQL query
    //3. Execute sql query and read the results
    //4. If no results, show login failed error, if success write user to session
}

function do_logout() {
    //Delete user to session
}

function is_logged_in() {
    return get_user();
}


function auth_get_user() {
	return $_SESSION['user'] ?? null;
}
