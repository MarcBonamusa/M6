const alumno2 = {
    nombre: "Aina",
    apellidos: "Garcia López",
    edad: 21,
    curso: "DAMv1"
};

/*
let propiedad = "nombre"
console.log(alumno2[propiedad])

propiedad = prompt("Dime una propiedad para mostrar", "apellidos")
console.log(alumno2[propiedad])

propiedad = prompt("Añade un nuevo campo", "curso")
let valor = prompt("Introduce el valor del campo", "1ero")
alumno2[propiedad] = valor

console.log(alumno2)
*/

function printAlumno(alumno2) {
    var result = ``;
    for (var p in alumno2) {
        result += `${p} = ${alumno2[p]}\n`; 
    }
    return result
}
console.log(printAlumno(alumno2))

//nombre = Aina
//apellidos = Garcia López
//edad = 21
//curso = DAMv1


alumno2.getInfo = function() {
    return 'El alumno ' + this.nombre + ' ' + this.apellidos + ' tiene ' + this.edad + ' años'
}
console.log(alumno2.getInfo());

// El alumno Aina Garcia López tiene 21 años