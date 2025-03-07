export class Personaje {
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre
        this.nivel = nivel
        this.puntosDeVida = puntosDeVida
    }

    atacar(daño) { return "Ataca y hace ${daño} de daño" }
}