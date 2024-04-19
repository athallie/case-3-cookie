<?php

$loggedOut = $_GET["loggedout"];
$email = $_COOKIE["email"];
echo $email;
setcookie($email, "", time() - 3600, "/");
unset($_COOKIE[$email]);
setcookie("email", "", time() - 3600, "/");
unset($_COOKIE['email']);

echo "Logged Out = $loggedOut";
