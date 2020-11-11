<?php

require_once 'includes/auth.php';
require_once 'includes/utils.php';
require_once 'includes/db.php';


if (post('action') == 'login') {

    $email = escape(p('email'));
    $password = escape(p('password'));

    if(do_login($email, $password) {
        redirect('profile.php')
    });
}


?>

<?php include 'components/header.php'; ?>
<!-- CONTENT -->

    <h1>Login</h1>

    <p>Do not have an account? <a href="register.php">Please register</a></p>

    <form method="post">
        <input type="hidden" name="action" value="login">
        <div class="field">
            <label>Email:</label>
            <input type="text" name="email">
        </div>

        <div class="field">
            <label>Password:</label>
            <input type="password" name="password">
        </div>

        <div class="field">
            <input type="submit" class="button" value="Log In">
        </div>

    </form>


<!-- /CONTENT -->
<?php include 'components/footer.php'; ?>
