/*Get URL Base*/

let url = new URL(window.location.href);
let urlParts = url.pathname.split('/');
let projectRoot = urlParts[1];
let baseUrl = window.location.protocol + "//" + window.location.host;
if (projectRoot && !projectRoot.search(".php")) {
    baseUrl += `/${projectRoot}`;
}

function getCookie(cookieKey) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split("=");
        if (key === cookieKey) {
            return decodeURIComponent(value);
        }
    }
    return null;
}