<?php 
session_start();
echo '<h1>Session trong PHP</h1>';
    
    if( isset( $_SESSION['counter'] ) ) {
        $_SESSION['counter'] += 1;
    }else {
     $_SESSION['counter'] = 1;
    }
$msg = "<p>Bạn là vào truy cập ".  $_SESSION['counter'] . ' lần vào trang</p>';
echo $msg;



?>