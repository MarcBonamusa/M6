// Clase Alumno
export class Alumno {
    constructor(nombre, apellidos, fechaNacimiento, email, ciclo, notas) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.fechaNacimiento = new Date(fechaNacimiento)
        this.email = email
        this.ciclo = ciclo
        this.notas = notas
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesDiferencia = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad
    }

    calcularMedia() {
        const ponderaciones = this.ciclo === "DAM" ? [0.3, 0.2, 0.3, 0.2] : [0.2, 0.4, 0.2, 0.2];
        return this.notas.reduce((total, nota, i) => total + nota * ponderaciones[i], 0).toFixed(2);
    }

    toString() {
        return `${this.nombre} ${this.apellidos}`;
    }

    infoAlumno() {
        return `${this.nombre} ${this.apellidos} | Edad: ${this.calcularEdad()} | Ciclo: ${this.ciclo} | Media: ${this.calcularMedia()}`;
    }
}