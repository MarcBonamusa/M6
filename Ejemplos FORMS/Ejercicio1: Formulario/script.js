let formulario = document.getElementById("form").addEventListener("submit", (event) => {
    let nombre = document.getElementById("nombre").value
    let apellido =document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let fecha = document.getElementById("fecha").value
    let contrasena = document.getElementById("contra").value
    
    console.log(nombre, apellido, email, fecha, contrasena)

    if (nombre.lenght < 3 || nombre.lenght > 10) {
        alert("CHACHOOOOO que te has pasao")
        event.preventDefault();
    }
})