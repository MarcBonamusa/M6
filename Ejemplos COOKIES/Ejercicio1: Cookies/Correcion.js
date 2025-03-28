function crearCookies(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    let caducidad = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + caducidad + "; path=/";
    document.cookie = "visited=true; " + caducidad + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}

function checkFirstVisit() {
    return !getCookie("visited");
}

function aplicarEstilos() {
    const bgColor = getCookie("bgColor");
    const textColor = getCookie("textColor");

    if (bgColor && textColor) {
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const preferenceForm = document.getElementById('preferencesForm');

    if (checkFirstVisit()) {
        preferenceForm.style.display = "block";
    } else {
        aplicarEstilos();
        preferenceForm.style.display = "none";
    }

    preferenceForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let bgColor = document.getElementById('bgColor').value;
        let textColor = document.getElementById('textColor').value;

        crearCookies("bgColor", bgColor, 4);
        crearCookies("textColor", textColor, 4);

        aplicarEstilos();
        preferenceForm.style.display = "none";
    });
});