let boton = document.getElementById("boton")
let imagen = document.getElementById("foto")
let campo = document.getElementById("texto")

boton.addEventListener("click", () => {
    alert("Click")
})

campo.addEventListener("dblclick", () => {
    alert('Doble click')
})

imagen.addEventListener("mouseover", () => {
    console.log('Eje X: ' + screenX + ' Eje Y: '+ screenY )
})

document.addEventListener("keypress", () =>{
    if (event.key === "Enter") {
        alert("Click en ENTER")
    }
})