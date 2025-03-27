function crearCookies() {
    let fondo = document.getElementById('fondo').value;
    let fuente = document.getElementById('fuente').value;

    document.cookie = `fondo=${fondo}; path=/; max-age=31536000`;
    document.cookie = `fuente=${fuente}; path=/; max-age=31536000`;
    document.cookie = `configurada=true; path=/; max-age=31536000`;

    if (window.opener) {
        window.opener.location.reload();
    }
    window.close();
}

document.addEventListener("DOMContentLoaded", () => {
    let botonGuardar = document.getElementById('guardar');
    if (botonGuardar) {
        botonGuardar.addEventListener('click', crearCookies);
    }
});