let num1 = prompt("Introduce un número");
let num2 = prompt ("Introduce otro número");

// Ejercicio 1
function mayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

alert(`El número mayor es ${mayor(num1, num2)}`);


// Ejercicio 2
function multiplicar() {
    let num1 = parseInt (prompt("Introduce un número"));
    let num2 = parseInt (prompt ("Introduce otro número"));
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }
    return resultado;
}

alert(`El resultado de la multiplicacion es: ${multiplicar()}`);

// Ejercicio 3
function multiTresNum() {
    let num1 = parseInt(prompt("Introduce un número"));
    let num2 = parseInt(prompt("Introduce otro número"));
    let num3 = parseInt(prompt("Introduce otro número más"));
    
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }

    let resultadoFinal = 0;
    for (let i = 0; i < num3; i++) {
        resultadoFinal += resultado;
    }

    return resultadoFinal;
}

alert(`El resultado de la multiplicación es: ${multiTresNum()}`);

// Ejercicio 4
let nota1 = parseFloat(prompt("Introduce la primera nota"));
let nota2 = parseFloat(prompt("Introduce la segunda nota"));
let nota3 = parseFloat(prompt("Introduce la tercera nota"));

function notaMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

alert(`El resultado de la media de las notas es: ${notaMedia(nota1, nota2, nota3).toFixed(2)}`);

// Ejercicio 5
function esNumeroArmstrong(num1) {

}

// Ejercicio 6
function alCubo(num1) {
    let resultado = Math.pow(num1, 3)
    let estado = true
    if (Number.isInteger(resultado)) {
        alert (`${resultado} es un numero entero`)
    } else {
        estado = false
        alert (`${resultado} no es un numero entero`)
    }
}

alCubo(num1)

// Ejercicio Dados
let dado1 = Math.floor(Math.random() * 6) + 1;
let dado2 = Math.floor(Math.random() * 6) + 1;

let dado3 = Math.floor(Math.random() * 6) + 1;
let dado4 = Math.floor(Math.random() * 6) + 1;

if (dado1 + dado2 > dado3 + dado4) {
    alert(`El primer jugador ha ganado con ${dado1 + dado2}`);
} else {
    alert(`El segundo jugador ha ganado con ${dado3 + dado4}`);
}
