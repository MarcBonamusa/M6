import { Alumno } from "./Alumno.js";
// Clase GestorAlumnos
export class GestorAlumnos {
    constructor(alumnos) {
        this.alumnos = new Map();
    }

    agregarAlumno(alumno) {
        const nombreCompleto = `${alumno.nombre} ${alumno.apellidos}`;
        if (this.alumnos.has(nombreCompleto)) {
            console.log("Ya esta registrado!")
        }
        this.alumnos.set(nombreCompleto, alumno)
        console.log("Agregado!")
    }

    buscarAlumno(nombreCompleto) {
        return this.alumnos.get(nombreCompleto) || `No esta registrado!`;
    }

    eliminarAlumno(nombreCompleto) {
        if (!this.alumnos.has(nombreCompleto)) {
            console.log("No se encuentra!")
        }
        this.alumnos.delete(nombreCompleto);
        console.log("Eliminado!")
    }

    mostrarAlumnosOrdenados() {
        const alumnosOrdenados = [...this.alumnos.values()].sort((a, b) => b.calcularMedia() - a.calcularMedia());
        return alumnosOrdenados
    }

    listarAlumnos() {
        const alumnosOrdenados = [...this.alumnos.keys()].sort();
        let llista = [];
        alumnosOrdenados.forEach(alumnoClave => llista.push(this.alumnos.get(alumnoClave)))
        return llista
    }
}