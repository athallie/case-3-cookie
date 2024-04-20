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
    <link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
<div class="container-fluid" id="header-container">
    <div class="row">
        <div class="col col-10">
            <h1>Kelompok 1</h1>
        </div>
        <div class="col col-1 text-center">
            <a href="#" onclick="toHomePage()">
                <h3>Home</h3>
            </a>
        </div>
        <div class="col col-1 text-center">
            <a href="#" onclick="toProfilePage()">
                <h3>Profile</h3>
            </a>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
<script src="../scripts/js/helper.js"></script>
<script>
    function toHomePage() {
        console.log(baseUrl);
        window.location.href = baseUrl + `/index.php`;
    }
    function toProfilePage() {
        if (getCookie("email") !== null) {
            window.location.href = baseUrl + '/pages/profile-page.php';
        } else {
            window.location.href = baseUrl + '/pages/login-page.php';
        }
    }
</script>
</body>
</html>