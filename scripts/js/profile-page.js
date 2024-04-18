fetch('/scripts/php/login.php').then(
    response => response.text()
).then(
    data => {
        console.log(data);
    }
)