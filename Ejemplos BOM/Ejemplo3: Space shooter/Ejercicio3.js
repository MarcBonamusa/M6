document.addEventListener('mousemove', (event) => {
    const foto = document.getElementById('foto');
    foto.style.left = `${event.clientX}px`
    foto.style.right = `${event.clientY}px`
});

document.addEventListener("keypress", () =>{
    if (event.key === " ") {
        console.log("ESPACIO")
    }
})