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