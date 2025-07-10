function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000";
}

window.onload = function() {
    if (document.cookie.indexOf("cookies_accepted=true") === -1) {
        document.getElementById('cookie-consent').style.display = 'flex';
    } else {
        document.getElementById('cookie-consent').style.display = 'none';
    }
};
