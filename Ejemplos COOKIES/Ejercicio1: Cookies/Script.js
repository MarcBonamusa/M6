function aplicarPreferencias() {
    let colorFondo = getCookie("colorFondo");
    let colorFuente = getCookie("colorFuente");

    if (colorFondo) document.body.style.backgroundColor = colorFondo;
    if (colorFuente) document.body.style.color = colorFuente;
}

function abrirVentanaConfig() {
    let ventanaConfig = window.open("", "ConfigWindow", "width=400,height=300,top=300,left=300");

    if (ventanaConfig) {
        ventanaConfig.document.write(`
            <h1>Configuración de preferencias</h1>
            <label for="fondo">Color de fondo: </label>
            <input type="color" id="fondo"><br><br>
            <label for="fuente">Color de fuente: </label>
            <input type="color" id="fuente"><br><br>
            <button id="guardar">Guardar</button>
        `);

        ventanaConfig.onload = function () {
            let inputFondo = ventanaConfig.document.getElementById("fondo");
            let inputFuente = ventanaConfig.document.getElementById("fuente");

            inputFondo.value = getCookie("colorFondo") || "#ffffff";
            inputFuente.value = getCookie("colorFuente") || "#000000";

            ventanaConfig.document.getElementById("guardar").addEventListener("click", function () {
                setCookie("colorFondo", inputFondo.value);
                setCookie("colorFuente", inputFuente.value);
                setCookie("configurada", "true");

                ventanaConfig.close();
                location.reload();
            });
        };
    } else {
        alert("No se pudo abrir la ventana de configuración. Puede estar bloqueada por el navegador.");
    }
}

if (!getCookie("configurada")) {
    abrirVentanaConfig();
}

aplicarPreferencias();