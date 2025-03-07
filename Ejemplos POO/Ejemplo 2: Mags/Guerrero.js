import { Personaje } from "./Personaje";

export class Guerrero extends Personaje {
    fuerza;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super (nombre, nivel, puntosDeVida) 
        this.fuerza = fuerza
    }

    golpeEspada() { return `El guerrero ataca con la espada` }
}