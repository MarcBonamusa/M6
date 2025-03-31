import { GestorAlumnos } from "./GestorAlumnos.js";
import { Alumno } from "./Alumno.js";

const alumnosJSON = `[
    {"nombre": "Ana", "apellidos": "Pérez Gómez", "fechaNacimiento": "2005-06-15", "email": "ana.perez@email.com", "ciclo": "DAM", "notas": [8, 7, 9, 6] },
    {"nombre": "Luis", "apellidos": "Gómez Sánchez", "fechaNacimiento": "2004-11-22", "email": "luis.gomez@email.com", "ciclo": "DAW", "notas": [5, 6, 8, 7] },
    {"nombre": "Elena", "apellidos": "Ruiz Fernández", "fechaNacimiento": "2006-02-10", "email": "elena.ruiz@email.com", "ciclo": "DAM", "notas": [9, 9, 10, 8] },
    {"nombre": "Carlos", "apellidos": "López Martínez", "fechaNacimiento": "2003-07-03", "email": "carlos.lopez@email.com", "ciclo": "DAW", "notas": [7, 8, 6, 9] },
    {"nombre": "Marta", "apellidos": "Sánchez Ortega", "fechaNacimiento": "2005-09-14", "email": "marta.sanchez@email.com", "ciclo": "DAM", "notas": [6, 7, 8, 7] },
    {"nombre": "David", "apellidos": "Fernández López", "fechaNacimiento": "2004-05-30", "email": "david.fernandez@email.com", "ciclo": "DAW", "notas": [7, 6, 5, 8] },
    {"nombre": "Laura", "apellidos": "García Romero", "fechaNacimiento": "2006-08-20", "email": "laura.garcia@email.com", "ciclo": "DAM", "notas": [9, 10, 8, 9] },
    {"nombre": "Javier", "apellidos": "Rodríguez Pérez", "fechaNacimiento": "2003-12-12", "email": "javier.rodriguez@email.com", "ciclo": "DAW", "notas": [6, 5, 7, 6] },
    {"nombre": "Beatriz", "apellidos": "Martínez Sánchez", "fechaNacimiento": "2005-07-25", "email": "beatriz.martinez@email.com", "ciclo": "DAM", "notas": [8, 8, 9, 7] },
    {"nombre": "Sergio", "apellidos": "Hernández Ruiz", "fechaNacimiento": "2004-04-17", "email": "sergio.hernandez@email.com", "ciclo": "DAW", "notas": [5, 6, 7, 5] },
    {"nombre": "Cristina", "apellidos": "Díaz Fernández", "fechaNacimiento": "2006-01-09", "email": "cristina.diaz@email.com", "ciclo": "DAM", "notas": [9, 9, 10, 9] },
    {"nombre": "Pablo", "apellidos": "Gómez Ortega", "fechaNacimiento": "2003-10-05", "email": "pablo.gomez@email.com", "ciclo": "DAW", "notas": [7, 8, 7, 6] }
]`;

function muestraResultadoDOM(identificador, resultado) {
    let content = document.getElementById(identificador);
    let p = document.createElement("p");
    p.innerHTML = " " + resultado;
    content.appendChild(p);
}

let alumno = new Alumno("Marc", "Bonamusa Navarro", "2006-10-16", "marc@gmail.com", "DAWe", [8, 4, 6, 7])

function init() {
    // 1 Inicializamos el Gestor de Alumnos mediante un JSON. 
    const gestor = new GestorAlumnos()
    JSON.parse(alumnosJSON).forEach(dato => {
        gestor.agregarAlumno(new Alumno(dato.nombre, dato.apellidos, dato.fechaNacimiento, dato.email, dato.ciclo, dato.notas))
    });

    console.log("2. Mostramos lista de alumnos ordenados alfabéticamente")
    gestor.listarAlumnos()

    console.log("3. Mostramos los alumnos ordenados por media")
    console.log(gestor.mostrarAlumnosOrdenados())

    console.log("4. Mostramos un alumno concreto")
    gestor.buscarAlumno("Beatriz Martínez Sánchez")

    console.log("5. Eliminamos un alumno y mostramos lista de alumnos ordenados")
    gestor.eliminarAlumno("Pablo Gómez Ortega")

}

init();