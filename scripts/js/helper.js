/*Get URL Base*/
function getBaseUrl () {
    let url = new URL(window.location.href);
    let urlParts = url.pathname.split('/');
    let projectRoot = urlParts[1];
    let baseUrl = window.location.protocol + "//" + window.location.host;
    let regex = /^(pages|assets|scripts|styles.README\.md|\.gitignore|.+\.php)/;
    if (projectRoot.trim() !== "" && !regex.test(projectRoot)) {
        baseUrl += `/${projectRoot}`;
    }
    return baseUrl;
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