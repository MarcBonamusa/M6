document.addEventListener('mousemove', (event) => {
    const foto = document.getElementById('foto');
    foto.style.left = `${event.clientX}px`
    foto.style.right = `${event.clientY}px`
});

document.addEventListener("keypress", (event) => {
    if (event.key === " ") {
        dispararBala();
    }
});

function dispararBala() {
    const foto = document.getElementById('foto');
    const bala = document.createElement("div");
    bala.classList.add("bala");
    document.body.appendChild(bala);
    
    let x = foto.offsetLeft + foto.width / 2;
    let y = foto.offsetTop;
    
    bala.style.left = `${x}px`;
    bala.style.top = `${y}px`;

    let intervalo = setInterval(() => {
        y -= 5;
        bala.style.top = `${y}px`;
        if (y < 0) {
            clearInterval(intervalo);
            bala.remove();
        }
    }, 20);

}
