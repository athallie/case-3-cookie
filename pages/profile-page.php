<?php
require 'header.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case 3 - Kelompok 1</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="/styles/styles.css">
</head>
<body>
<div class="container-fluid" id="profile-container">
    <div class="row" id="profile-header">
        <div class="col col-3 text-center">
            <h1>User Profile</h1>
        </div>
        <div class="col"></div>
    </div>
    <div class="row" id="profile-body">
        <div class="col" id="left-col">
            <img src="/assets/profile-pictures/default-profile-picture.jpg">
        </div>
        <div class="col col-9" id="right-col">
            <h5>Nama</h5>
            <p id="name-data">Nama Pengguna</p>

            <h5>Email</h5>
            <p id="email-data">
                <?php
                    session_start();
                    if (isset($_SESSION["email"])) {
                        echo $_SESSION["email"];
                    }
                ?>
            </p>

            <h5>Program Studi</h5>
            <p id="program-studi-data">Program studi pengguna</p>

            <h5>NIM</h5>
            <p id="nim-data">NIM pengguna</p>
        </div>
    </div>
    <div class="row" id="profile-footer">
        <div class="col">
            <button type="button" class="btn" id="logout-button">Logout</button>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="/scripts/js/helper.js"></script>
<script src="/scripts/js/profile-page.js"></script>
</body>
</html>

<?php
require 'footer.php';
?>