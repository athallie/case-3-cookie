/*Redirect pengguna yang tidak login ke halaman login*/
let referrer = document.referrer;
let searchParams = new URLSearchParams(window.location.search);
if (!(referrer.includes("login-page.php") && searchParams.get("login") === "success")) {
    window.location.href = "./login-page.php?loggedin=false";
}

let email = getCookie("email") !== null ? getCookie("email") : searchParams.get("email");

if (searchParams.get("login")) {
    searchParams.delete("login");

}

if (searchParams.get("email")) {
    searchParams.delete("email");
}

window.history.replaceState({}, '', `${window.location.pathname}`);

let logoutButton = document.querySelector("button#logout-button");

logoutButton.addEventListener("click", (e) => {
    let url = window.location.protocol + "//" + window.location.host + "/scripts/php/logout.php?loggedout=true";
    fetch(
        url
    ).then(
        response => response.text()
    ).then(
        data => {
            console.log(data);
            window.location.href = "./login-page.php?loggedout=true";
        }
    )
})

let nameText = document.querySelector("p#name-data");
let programStudiText = document.querySelector("p#program-studi-data");
let nimText = document.querySelector("p#nim-data");

let data = {};

if (getCookie(`${email}`) === null) {
    data[email] = {
        "name": generateName(),
        "programStudi": getProgramStudi(),
        "nim": generateNim()
    };

    document.cookie = `${email}=${JSON.stringify(data)}; path=/`;
} else {
    data = JSON.parse(getCookie(`${email}`));
}

nameText.textContent = data[email]["name"];
programStudiText.textContent = data[email]["programStudi"];
nimText.textContent = data[email]["nim"];

function generateName() {
    return "User" + Math.floor(Math.random() * 9000) + 1000;
}

function getProgramStudi() {
    let majors = ["Sistem Informasi", "Teknik Informatika", "Teknik Komputer", "Teknologi Informasi", "Pendidikan Teknologi Informasi", "Ilmu Komputer"];
    return majors[Math.floor(Math.random() * majors.length)];
}

function generateNim() {
    let result = '';
    for (let i = 0; i < 15; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

