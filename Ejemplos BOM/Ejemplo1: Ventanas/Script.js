let finestra;

//Abre una nueva ventana de dimensiones 500x200px en la posición (100,200)
let abrir = document.getElementById('botonObrir');
abrir.addEventListener('click', () => {
    finestra = window.open('','Finestra Marc', 'height = 200px, width = 500px, top = 200px, left = 500px');
    //escribe en ella (con document.write) un título h1 que diga ‘Hola’
    if (finestra) {
        finestra.document.write('<h1>Hola</h1>');
    }
});

//muévela 300 px hacia abajo y 100 a la izquierda (quizás es necesario crear un botón para ver el efecto)
let moure = document.getElementById('botonMoure');
moure.addEventListener('click', () => {
    
    if (finestra) {
        finestra = window.moveBy(-50, -50)
        finestra.focus();
    }
})

//ciérrala
let cerrar = document.getElementById('botonTancar');
cerrar.addEventListener('click', () => {
    window.close();
});

