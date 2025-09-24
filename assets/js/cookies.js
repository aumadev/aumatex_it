document.addEventListener('DOMContentLoaded', function () {
    console.log("Cookies.js caricato");

    document.getElementById('cookieBanner').style.display = 'flex';

    function showCookieBanner() {
        const cookieBanner = document.getElementById('cookieBanner');
        if (cookieBanner && !getCookie('cookiesAccepted')) {
            cookieBanner.style.display = 'flex';
        }
    }

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');

    if (acceptButton) {
        acceptButton.addEventListener('click', function () {
            setCookie('cookiesAccepted', 'true', 365);
            const cookieBanner = document.getElementById('cookieBanner');
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
            }
        });
    }

    if (declineButton) {
        declineButton.addEventListener('click', function () {
            setCookie('cookiesAccepted', 'false', 365);
            const cookieBanner = document.getElementById('cookieBanner');
            if (cookieBanner) {
                cookieBanner.style.display = 'none';
            }
        });
    }

    if (getCookie('cookiesAccepted')) {
        const cookieBanner = document.getElementById('cookieBanner');
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    } else {
        showCookieBanner();
    }
});
