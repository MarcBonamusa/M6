// EJEMPLOS DE USO DE forEach
console.log("-- EJEMPLOS --");
const vocales = ["a", "e", "i", "o", "u"];
vocales.forEach(
    function (vocal, indice, arr) {
      console.log(`El valor del elemento en la posición ${indice} es ${vocal} del array que estamos recorriendo que es ${arr}`);
    }
);

let numeros = [10, 20, 30, 40, 50];
numeros.forEach(
    function(numero) {
      console.log(numero);
    }
);

// Array de precios
const precios = [ 25,150,80,30,200];

// Array auxiliar para almacenar los precios filtrados
const preciosFiltrados = [];

// Filtrar precios con precio mayor a 100 utilizando forEach
precios.forEach(
  function preu(precio) {
    if (precio > 100) {
      preciosFiltrados.push(precio);
    }
  }
);

// Imprimir los precios filtrados por consola
console.log(preciosFiltrados);

// EJERCICIO 1
console.log("-- EJERCICIO 1 --");
var numbers = [3, 27, 95, 7, 25, 95, 81];

var maxNumber = numbers[0];
numbers.forEach(
  function(numero) {
    if (numero > maxNumber) {
      maxNumber = numero;
      document.getElementById("ej1").textContent = maxNumber;
    }
  }
);
var numbers2 = [3, 27, 95, 7, 25, 95, 81];

var maxNumber2 = numbers2[0];
numbers2.forEach( 
  (numero) => {
    if (numero > maxNumber2) {
      maxNumber2 = numero;
    }
  }
);

console.log("El número mayor del array es: " + maxNumber2);

// EJERCICIO 2
console.log("-- EJERCICIO 2 --");
var myStrings = ['first', 'second', 'third', 'fourth', 'reallyLongString', 'sixth'];

var longString = myStrings[0];
myStrings.forEach(
  function(str) {
    if (str.length > longString.length) {
      longString = str;
      document.getElementById("ej2").textContent = longString;
    }
  }
);

console.log("El string mas largo del array es: " + longString);

// EJERCICIO 3
console.log("-- EJERCICIO 3 --");
var diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

diasSemana.forEach(
  function (dia) {
    if (dia.startsWith('m')) {
      document.getElementById("ej3").textContent += dia + " ";
      console.log(dia);
    }
  }
)

// EJERCICIO 4
console.log("-- EJERCICIO 4 --");
var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio'];
var vocales2 = ['a', 'e', 'i', 'o', 'u'];

meses.forEach(
  function(mes) {
    if (vocales2.includes(mes[0])) {
      document.getElementById("ej4").textContent += mes + " ";
      console.log(mes);
    }
  }
)

// EJERCICIO 5
console.log("-- EJERCICIO 5 --");
var diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];

let diaPorM = diasSemana.find(dia => dia.startsWith('m'));
let diaPorV = diasSemana.findIndex(dia => dia.startsWith('v'));
let diasPorS = diasSemana.some(dia  => dia.startsWith('s'));
let diasAcabanS = diasSemana.every(dia  => dia.endsWith('s'));

document.getElementById("ej5").textContent += diaPorM;
document.getElementById("ej51").textContent += diaPorV;
document.getElementById("ej52").textContent += diasPorS;
document.getElementById("ej53").textContent += diasAcabanS;

console.log(diaPorM);
console.log(diaPorV);
console.log(diasPorS);
console.log(diasAcabanS);