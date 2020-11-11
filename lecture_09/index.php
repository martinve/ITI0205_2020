<!DOCTYPE html>
<html lang="en">

<?php


$title = 'Uuring: mesi aitab külmetust paremini leevendada kui tavaline ravim';

$content = 'Mesi on rahva seas tuntud kui köha ja külmetuse vastane ravim. Teaduspõhise selgituse saamiseks uurisid Oxfordi Ülikooli teadlased, kas mesi on parem köha ja nohu leevendaja kui tavalised käsimüügi ravimid.';


/*

$_SERVER 

$_GET 
$_POST
$_FILES

$_SESSION

*/


$num = $_GET['num'] ?? "0";


$num = (int)$num + 4;

?>

<head>
    <title>Minu esimene leht</title>
    <meta enctype="UTF-8">
</head>

<body>
   
	<h1><?php echo $title ?></h1>
	<p><?php echo $content ?></p>


  <h2>Counter: <?php echo $num; ?>

</body>
</html>