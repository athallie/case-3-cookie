<?php

$jsonData = file_get_contents('php://input');
$rawData = json_decode($jsonData, true);

$email = $rawData['email'];
$password = $rawData['password'];
$checkbox = $rawData['checkbox'];

echo "PHP: $email, $password, $checkbox";
