const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos); // Output: [1, 2, 3, 4, 5, 6, 7]

// Crea una función que reciba un array como entrada y devuelva un nuevo array con los elementos únicos del array original, es decir, eliminando los elementos duplicados.
function eliminarDuplicados(numeros) {
    let numerosUnicosSet = new Set(numeros)
    return numerosUnicosSet
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(tienenElementosEnComun(array1, array2)); // Output: true

// Crea una función que tome dos arrays como entrada y devuelva true si tienen al menos un elemento en común, y false en caso contrario
function tienenElementosEnComun(array1, array2) {
    let setArray1 = new Set(array1)
    let setArray2 = new Set(array2)
    for (let i of setArray1) {
        if (setArray2.has(i)) {
            return true
        }
    }
}