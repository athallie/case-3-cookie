<?php

$jsonData = file_get_contents('php://input');
$rawData = json_decode($jsonData, true);

$email = $rawData["email"];
$password = $rawData["password"];

echo "Test: $email, $password";
