function configuracionGuardada() {
    return document.cookie.includes("configurada=true");
}

function obtenerCookie(nombre) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split('=');
        if (key === nombre) return value;
    }
    return null;
}

function abrirVentana() {
    if (!configuracionGuardada()) {
        const features = "left=200,top=200,width=400,height=350";
        window.open('Ventana.html', 'ventana', features);
    }
}

function aplicarEstilos() {
    let fondo = obtenerCookie('fondo');
    let fuente = obtenerCookie('fuente');

    if (fondo) document.body.style.backgroundColor = fondo;
    if (fuente) {
        let titulo = document.getElementById('titulo');
        let parrafo = document.getElementById('parrafo');
        if (titulo) titulo.style.color = fuente;
        if (parrafo) parrafo.style.color = fuente;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    abrirVentana();
    aplicarEstilos();
});