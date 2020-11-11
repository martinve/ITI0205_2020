<?php


function db() {
    static $conn;
    if ($conn===NULL){
        $conn = mysqli_connect (DB_HOST, DB_USER, DB_PASS, DB_BASE);
        $conn->set_charset('utf8');
    }
    return $conn;
}



function db_get_list($query) {
    $conn = db();
    $data = [];
    $res =  mysqli_query($conn, $query) or die(mysqli_error($conn));
    while($row = mysqli_fetch_object($res)) {
        $data[] = $row;
    }
    return $data;
}
