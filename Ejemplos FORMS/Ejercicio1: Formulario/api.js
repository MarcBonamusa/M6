const formulario = document.getElementById("form")
const nombre = document.getElementById("nombre")
let errorSpan = document.getElementById("errorEmail");

formulario.addEventListener("submit", (event) => {
    if (!nombre.checkValidity()) {
        alert("CHECK VALIDITY")
        nombre.reportValidity()
        event.preventDefault()
        errorSpan.innerText = "Por favor, introduce un nombre válido.";
    } else {
        errorSpan.innerText = "";
    }

    
})