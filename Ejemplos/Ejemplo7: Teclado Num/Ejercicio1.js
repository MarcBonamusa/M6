for (i = 1; i < 21; i++) {
    let num = document.createTextNode(i)
    let cuadrado = document.createElement('p')
    cuadrado.appendChild(num)
    let teclado = document.getElementById('contenedor')
    
    cuadrado.style.color = 'white'
    cuadrado.style.backgroundColor = '#008B8B'
    cuadrado.style.height = '50px'
    cuadrado.style.width = '50px'
    cuadrado.style.fontSize = '45px'
    cuadrado.style.textAlign = 'center'
    cuadrado.style.margin = '3px'

    teclado.style.display = 'grid'
    teclado.style.gridTemplateColumns = 'auto auto auto'
    teclado.style.grid = '3'
    teclado.style.width = '100px'
    
    teclado.appendChild(cuadrado)
    
    if (i % 3 == 0) {
        cuadrado.style.backgroundColor = 'yellow';
    }

    if (i % 2 == 0) {
        cuadrado.style.backgroundColor = 'blue'
    }

}