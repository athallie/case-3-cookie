<?php

session_start();

$jsonData = file_get_contents('php://input');
$rawData = json_decode($jsonData, true);

$email = $rawData['email'];
$password = $rawData['password'];
$checkbox = $rawData['checkbox'];

$validEmail = "user@example.com";
$validPassword = "6nV7^7-1";

if ($email === $validEmail && $password === $validPassword) {
    $_SESSION["login"] = true;
    $_SESSION["email"] = $email;

    if ($checkbox === "true") {
        setcookie("email", $email, time() + 3600, "/");
    }
    echo "/pages/profile-page.php?login=success";
} else {
    echo "/pages/login-page.php?login=failed";
}