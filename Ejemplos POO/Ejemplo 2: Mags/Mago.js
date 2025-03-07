import { Personaje } from "./Personaje";

export class Mago extends Personaje {
    mana;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super (nombre, nivel, puntosDeVida) 
        this.mana = mana
    }

    lanzarHechizo() { return `El mago lanza un hechizo` }
}