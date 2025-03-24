function abrirVentana(){
    const features= "left = 650, height = 700, width = 700, top = 200"
    open('Ventana.html', 'ventana', features)
}

document.addEventListener("DOMContentLoaded", ()=>{
    abrirVentana()
})

function guardarDatos() {
    let fuente = document.getElementById("fuente").value;
    let fondo = document.getElementById("fondo").value;
    document.cookie = `fuente=${fuente}`;
    document.cookie = `fondo=${fondo}`;
    window.close()
}