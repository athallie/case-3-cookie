let loginButton = document.querySelector("button#login-button");
let loginModal = new bootstrap.Modal(document.querySelector("div#login-modal"));
let loginModalHeader = document.querySelector("div.modal-header");
let modalBodyText = document.querySelector("p#modal-body-text");
let loginModalBody = document.querySelector("div.modal-body");
let credentialValid = false;
let loginForm = document.querySelector('form#login-form');
let referrer =  document.referrer;
let urlParams = new URLSearchParams(window.location.search);

/*Aksi apabila pengguna datang ke halaman login dari halaman profil karena belum login*/
if (referrer.includes('profile-page.php') && urlParams.get("loggedin") === "false") {
    loginModalHeader.textContent = "Error";
    modalBodyText.textContent = "Anda belum login. Silahkan login untuk mengakses halaman profil.";
    loginModal.show();

    /*Hapus parameter URL*/
    urlParams.delete("loggedin");
    window.history.replaceState({}, '', `${window.location.pathname}`);
} else if (referrer.includes('profile-page.php') && urlParams.get("loggedout") === "true") {
    /*Hapus parameter URL*/
    urlParams.delete("loggedout");
    window.history.replaceState({}, '', `${window.location.pathname}`);
}

window.document.addEventListener("DOMContentLoaded", (e) => {
    console.log(getCookie("email"))
    if (getCookie("email") !== null) {
        window.location.href = './profile-page.php?login=success';
    }
})

/*Prevent Defaults*/
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

/*Login Button Click Event*/
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click")
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
        loginModalHeader.textContent = "Error";
        modalBodyText.textContent = "Email tidak valid. Silahkan masukkan email yang valid.\nContoh email valid: user@xmail.com";
        loginModal.show();
    } else if (!passwordIsValid(password.value)) {
        loginModalHeader.textContent = "Error";
        modalBodyText.textContent = "Password tidak valid. Panjang Password minimal 8 karakter serta mengandung huruf kapital, non-kapital, angka, dan simbol.\nContoh password valid: 6nV7^7-1";
        loginModal.show();
    } else {
        credentialValid = true;
    }

    if (credentialValid) {
        let data = {
            "email": userEmail.value,
            "password": password.value,
            "checkbox": String(checkBox.checked)
        }
        /*Send Data to PHP Login*/
        let url = window.location.protocol + "//" + window.location.host + "/scripts/php/login.php";
        fetch(
            url, {
                method: "POST",
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then(
            response => response.text()
        ).then(
            data => {
                console.log(data);
                /*Perlu disesuiakan dengan status cookie/session*/
                window.location.href = "./profile-page.php?login=success";
            }
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