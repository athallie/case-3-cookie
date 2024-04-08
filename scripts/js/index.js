let loginButton = document.querySelector("button#login-button");
let loginModal = new bootstrap.Modal(document.querySelector("div#login-modal"));
let loginModalHeader = document.querySelector("div.modal-header");
let loginModalBody = document.querySelector("div.modal-body");
let credentialValid = false;
let loginForm = document.querySelector('form#login-form');

/*Prevent Defaults*/
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

/*Login Button Click Event*/
loginButton.addEventListener("click", (e) => {
    let userEmail = document.querySelector('input[name="email"]');
    let password = document.querySelector('input[name="password"]');
    let checkBox = document.querySelector("input#login-checkbox");


    /*Debug Purposes*/
    console.log(
        "email: " + userEmail.value + "\n",
        "password: " + password.value + "\n",
        "remember me: " + checkBox.checked
    );

    console.log("email: " + emailIsValid(userEmail.value));
    console.log("password: " + passwordIsValid(password.value));

    /*Check Credentials Validity & Show Modal*/
    if (!emailIsValid(userEmail.value)) {
        showModal("Error", "Invalid Email");
    } else if (!passwordIsValid(password.value)) {
        showModal("Error", "Invalid Password");
    } else {
        credentialValid = true;
    }

    if (credentialValid) {
        /*Send Data to PHP Login*/
        fetch(
            "scripts/php/login-test.php", {
                method: "post",
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(
                    {
                        "email": userEmail.value,
                        "password": password.value
                    }
                )
            }
        ).then(
            (
                response => {
                    response.text().then((
                        response => {
                            console.log(response);
                        }
                    ))
                }
            )
        )

        /*Send to PHP Cookie & Session Creator*/
        if (checkBox.checked) {

        }
    }

})

/*Check email & password*/
function passwordIsValid(password) {
    let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    return regex.test(password);
}

function emailIsValid(email) {
    let regex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "i");
    return regex.test(email);
}

function showModal (headerText, bodyText) {
    loginModalHeader.textContent = headerText;
    loginModalBody.textContent = bodyText;
    loginModal.show();
}

/*Modal Close Button*/
let loginModalButton = document.querySelector("button#login-modal-button");
loginModalButton.addEventListener("click", (e) => {
    loginModal.hide();
})