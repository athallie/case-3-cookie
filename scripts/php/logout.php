<?php

$loggedOut = $_GET["loggedout"];
$email = $_COOKIE["email"];

//menghancurkan variabel
$_SESSION = array();

//menghancurkan cookie
$params = session_get_cookie_params();
setcookie($email, "", time() - 3600, "/");
unset($_COOKIE[$email]);
setcookie("email", '', time() - 3600,
    $params["path"], $params["domain"]
);
unset($_COOKIE['email']);

//menghancurkan session
session_destroy();

//redirect
header("Location: /pages/login-page.php?loggedout=true");
exit();
