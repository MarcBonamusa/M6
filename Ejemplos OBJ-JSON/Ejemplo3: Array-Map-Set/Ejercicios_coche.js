let coches = [
    ["seat","Codoba",1997,10000],
    ["Kia","Sorento",1994,1000],
    ["seat","Todelo",2000,10000],
    ["Fiat","Bravo",2010,10200],
    ["Fiat","500",2010,10000],
    ["Mercedes","Calse B",2001,39000],  
    ["seat","Ibiza",1993,10100],
    ["Alfa Romeo","Julieta",2002,10000],
    ["Alfa Romeo","159",2002,10400],
    ["Mercedes","Calse C",2001,1000],  
    ["Alfa Romeo","147",1990,10500],
    ["Fiat","Punto",1990,999],
    ["Citroen","Saxo",1980,10300],
    ["Renault","Superc 5",1980,12000],
    ["BWM","M3",2020,1000],
    ["Kia","Picanto",1990,1000],
    ["Alfa Romeo","spider",1970,14500],
    ["Mercedes","Calse A",1994,60100],  
    ["Mercedes","Calse D",2011,21221]  
];


// 1. Devuelve los vehículos de la marca que no sean ni 'Alfa Romeo' ni 'Kia' que tengan más de 20 años.
console.log("Ejercicio 1")

let cochesFiltrados = coches.filter(coche => coche[0].toLowerCase() !== "alfa romeo" && coche[0].toLowerCase() !== "kia" && 20 < (new Date().getFullYear() - coche[2]));
console.log(cochesFiltrados);

/*
function filtrarVehicles() {
    coches.filter(function(coche) {
        let marca = coche[0]
        let anyo = coche[2]

        if (marca !== "Alfa Romeo" && marca !== "Kia" && 20 < (new Date().getFullYear() - coche[2])) {
            console.log(coche)
            return coche
        }
    })
}
console.log(filtrarVehicles());
// ANONIMA
const filtrarVehicles2 = function () {
    coches.filter(function(coche) {
        let marca = coche[0]
        let anyo = coche[2]

        if (marca !== "Alfa Romeo" && marca !== "Kia" && 20 < (new Date().getFullYear() - coche[2])) {
            console.log(coche)
            return coche
        }
    })
}
console.log(filtrarVehicles2());
*/

// 2. Ordena el array ordenado por precio descendentemente.
console.log("Ejercicio 2")
let ordenado = coches.sort((a, b) => b[3] - a[3]);
console.log(ordenado);
// 3. Devuelve el array con un 20% de rebaja al precio.
console.log("Ejercicio 3")
let rebaja = coches.map(coche => coche[3] * 0.2);
console.log(rebaja);