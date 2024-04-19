<?php

session_start();

$jsonData = file_get_contents('php://input');
$rawData = json_decode($jsonData, true);

$email = $rawData['email'];
$password = $rawData['password'];
$checkbox = $rawData['checkbox'];

if ($checkbox === "true") {
    setcookie("email", $email, time() + 3600, "/");
}

echo "PHP: $email, $password, $checkbox";
