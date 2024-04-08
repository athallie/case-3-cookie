<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Case 3 - Kelompok 1</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body>
    <div class="container-fluid" id="main-container">
        <div class="card" id="login-container">
            <div class="card-body bg-success">
                <div class="card-title">
                    <h1>Login</h1>
                </div>
                <form id="login-form">
                    <div class="">
                        <label class="label">Email</label> <br>
                        <input class="input" type="email" name="email" placeholder="Email">
                    </div>
                    <div class="">
                        <label class="label">Password</label> <br>
                        <input class="input" type="password" name="password" placeholder="Password">
                    </div>
                    <div class="form-check" id="checkbox">
                        <input class="form-check-input" type="checkbox" value="" id="login-checkbox">
                        <label class="form-check-label" for="login-checkbox">Remember Me</label>
                    </div>
                </form>
                <button type="submit" class="btn" id="login-button">Login</button>
            </div>
        </div>
    </div>
    <div class="modal fade" id="login-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">Test</div>
                <div class="modal-body">Test</div>
                <div class="modal-footer">
                    <button type="button" class="btn" id="login-modal-button">Close</button>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="scripts/js/index.js"></script>
</body>
</html>