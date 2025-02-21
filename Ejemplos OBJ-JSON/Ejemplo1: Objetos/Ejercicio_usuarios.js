// Crea un array llamado usuarios que contenga al menos tres objetos representando personas. Cada objeto debe tener: nombre (string), edad (número), email (string)
const arrayAlumnos = [
    { nombre: "Juan", edad: 25, email: "juan@email.com" },
    { nombre: "Ana", edad: 30, email: "ana@email.com" },
    { nombre: "Paco", edad: 35, email: "paco@email.com" }
]

// Añade un nuevo usuario al array utilizando push().
const alumno = {};
alumno.nombre = "Manolo";
alumno.edad = 40;
alumno.email = "manolo@email.com";

arrayAlumnos.push(alumno);

// Escribe una función mostrarUsuarios() que recorra el array e imprima cada usuario
function mostrarUsuarios(arrayAlumnos) {
    let result = ``;
    for (let p in arrayAlumnos) {
        result += `Nombre: ${arrayAlumnos[p].nombre}, Edad: ${arrayAlumnos[p].edad}, Email: ${arrayAlumnos[p].email}\n`;
    }
    return result;
}
console.log(mostrarUsuarios(arrayAlumnos));

// Añade un método dentro de cada usuario llamado saludar(), que muestre un mensaje en la consola con su nombre.
function saludar(arrayAlumnos) {
    let result = ``;
    for (let p in arrayAlumnos) {
        result += `Hola ${arrayAlumnos[p].nombre}, que tal?\n`;
    }
    return result;
}
console.log(saludar(arrayAlumnos));