//Ejercicio 1
var tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,

    getImporte: function() {
    return this.unidades * this.precio
    }

};
console.log(tvSamsung.getImporte())

//Ejercicio 2
/*
for(let i = 1; i<=3; i++) {
    tvSamsung["Resolucion" + i] = prompt("Resolucion" + i, "full HD")
}

const propiedades = ["resolucion", "colores"];

// ¿Existe la propiedad?
if ("resolucion" in tvSamsung === false) {
    let valor = prompt("Introduce la resolucion", "default value")
    tvSamsung["resolucion"] = valor
}

if ("colores" in tvSamsung === false) {
    let valor = prompt("Introduce el tipo de colores", "default value")
    tvSamsung["colores"] = valor
}

document.getElementById("precio").textContent = tvSamsung.getImporte();
*/
//Ejercicio 3
let tvSamsung2 = `[
    { "marca":"LG", "categoria":"Televisores" },
    { "marca":"Samsung", "categoria":"Televisores" },
    { "marca":"Xiaomi", "categoria":"Televisores" }
]`;
let string = JSON.stringify(tvSamsung2);
console.log(string)

let inverso = JSON.parse(tvSamsung2);
console.log(inverso)