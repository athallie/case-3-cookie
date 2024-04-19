let nameText = document.querySelector("p#name-data");
let emailText = document.querySelector("p#email-data");
let programStudiText = document.querySelector("p#program-studi-data");
let nimText = document.querySelector("p#nim-data");

let email = getCookie("email");
let data = {};

if (getCookie(`${email}`) === null) {
    data[email] = {
        "name": generateName(),
        "email": email,
        "programStudi": getProgramStudi(),
        "nim": generateNim()
    };

    document.cookie = `${email}=${JSON.stringify(data)}`;
} else {
    data = JSON.parse(getCookie(`${email}`));
}

nameText.textContent = data[email]["name"];
emailText.textContent = data[email]["email"];
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