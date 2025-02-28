// Ejercicio 1.3

let arrayNotas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0]

// 1. Calcula la nota media
let notaMedia = arrayNotas.reduce((total, nota) => (total + nota / arrayNotas.length), 0) 
console.log("Nota media: " + notaMedia.toFixed(2))

// 2. Obtén la primera nota superior a 5
let superiorCinco = arrayNotas.reduce((nota, mayorCinco)  => nota > 5 ? nota : mayorCinco)
console.log("Primera nota superior a 5: " + superiorCinco)

let superior5 = arrayNotas.find(nota => nota > 5)
console.log("Primera nota superior a 5: " + superiorCinco)

// 3. Las notas son sobre 10, cambialas a sobre 20.
let notasSobre20 = arrayNotas.map(nota => nota * 2)
console.log("Notas sobre 20: " + notasSobre20.join(" | "))