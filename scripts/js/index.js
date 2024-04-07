/*Login Button Click Event*/
let loginButton = document.querySelector("button#login-button");
loginButton.addEventListener("click", (e) => {
    let userEmail = document.querySelector('input[name="email"]');
    let password = document.querySelector('input[name="password"]');
    let checkBox = document.querySelector("input#login-checkbox");

    console.log(
        "email: " + userEmail.value + "\n",
        "password: " + password.value + "\n",
        "remember me: " + checkBox.checked
    );

    console.log("email: " + emailIsValid(userEmail.value));
    console.log("password: " + passwordIsValid(password.value));

    let loginModal = new bootstrap.Modal(document.querySelector("div#login-modal"));
    let loginModalHeader = document.querySelector("div.modal-header");

    if (!emailIsValid(userEmail.value)) {
        loginModalHeader.textContent = "Email Invalid";
        loginModal.show();
    } else if (!passwordIsValid(password.value)) {
        loginModal.show();
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
