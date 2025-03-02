// Todos
// EXERCICI 1
const miArray = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias'];

function todosSonStrings(miArray) {
    let todosStrings = true;
    miArray.forEach(palabra => {
        if (typeof palabra !== 'string') {
            todosStrings = false;
        }
    });
    return todosStrings;
}

console.log("EXERCICI 1");
console.log(todosSonStrings(miArray));
  
// EXERCICI 2
const miArray2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18];

function todosSonPares(miArray2) {
    let todosPares = true;
    miArray2.forEach(numero => {
        if (numero % 2 !== 0) {
            todosPares = false;
        }
    });
    return todosPares;
}

console.log("EXERCICI 2");
console.log(todosSonPares(miArray2));

// Al menos uno
// EXERCICI 3
const miArray3 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias'];

function longitudMayorA2(miArray3) {
    let encontrado = false;
    miArray3.forEach(elemento => {
        if (elemento.length > 2) {
            encontrado = true;
        }
    });
    return encontrado;
}

console.log("EXERCICI 3");
console.log(longitudMayorA2(miArray3));

// EXERCICI 4
const miArray4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function alMenosUnPar(miArray4) {
    let encontrado = false;
    miArray4.forEach(numero => {
        if (numero % 2 === 0) {
            encontrado = true;
        }
    });
    return encontrado;
}

console.log("EXERCICI 4");
console.log(alMenosUnPar(miArray4));

// Transforma
// EXERCICI 5
const miArray5 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias'];

function stringLengths(miArray5) {
    return miArray5.map(item => item.length);
}

console.log("EXERCICI 5");
console.log(stringLengths(miArray5));

// EXERCICI 6

// Filtro
// EXERCICI 7

// EXERCICI 8

// Busca
// EXERCICI 9

// EXERCICI 10
const miArray10 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias', 'pues'];

function filtrarUltimaLetra(miArray10){
    return miArray10.reverse().find(palabra => palabra.startsWith('p'))
}

console.log("EXERCICI 10");
console.log(filtrarUltimaLetra(miArray10));

// EXERCICI 11
const miArray11 = ['hola', 'que', 'tal', 'estas', 'tu', 'bien', 'gracias', 'tambien'];

function filtrarPosicion(miArray11){
    return miArray11.findIndex(palabra => palabra.startsWith('t'))
}

console.log("EXERCICI 11");
console.log(filtrarPosicion(miArray11));

// EXERCICI 12
const miArray12 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ultimoPar(miArray12){
    return miArray12.reverse().find(numPar => numPar % 2 == 0)
}

console.log("EXERCICI 12");
console.log(ultimoPar(miArray12));

// Acumula
// EXERCICI 13
const miArray13 = [1, 2, 3, 4, 5, 6, 7]

function sumaArray(miArray13){
    let sumaFinal = 0 
    miArray13.forEach(num => { sumaFinal = num + sumaFinal });
    return sumaFinal
}

console.log("EXERCICI 13");
console.log(sumaArray(miArray13));

// EXERCICI 14
const miArray14 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function restaArray(miArray14){
    return miArray14.reduce((acumulador, num) => acumulador - num);
}

console.log("EXERCICI 14");
console.log(restaArray(miArray14));

// EXERCICI 15
const miArray15 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function restaElemento(miArray15){
    return miArray15.reverse().reduce((acumulador, num) => acumulador - num);
}

console.log("EXERCICI 15");
console.log(restaElemento(miArray15));