let boton = document.getElementById("boton")
let contenedor = document.getElementById("contenedor")

boton.addEventListener("click", (evento) => {
    console.log("Hola desde el meu boto")
    evento.stopPropagation()
})

contenedor.addEventListener("click", () => {
    console.log("Hola desde el meu div")
})