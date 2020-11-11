<?php

require_once 'config/app.php';
require_once 'includes/db.php';

/**
 * We first read the game to be edited
 */
$game_id = isset($_GET['id']) ? (int)$_GET['id'] : 0;

$query = 'SELECT 
g.*, s.name AS studio, g1.name AS genre
FROM games g
LEFT JOIN studios s ON s.id=g.studio_id
LEFT JOIN genres g1 ON g1.id=g.genre_id
WHERE g.id=%s';

$query = sprintf($query, $game_id);

$res = mysqli_query(db(), $query) or die(mysqli_error(db()));
$game = mysqli_fetch_object($res);



if(!$game) {
    //Show error here if game does not exist that we want to edit
}

//We read the games and genres to arrays to use them for displaying games.
//More optimal way would be to construct a query with joins in fetching the game



?>

<?php include 'components/header.php'; ?>

<?php if (!$game) { ?>
    <h1>Game Not Found</h1>
    <div class="alert alert-error">The game you were looking for is not in the system</div>
<?php } else { ?>

    <h1><?php echo $game->name; ?></h1>

    <dl>
       <dt>Genre:</dt>
       <dd><?php echo $game->genre; ?></dd>
    </dl>


<?php } ?>

<?php include 'components/footer.php'; ?>
