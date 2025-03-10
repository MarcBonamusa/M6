class Personaje {
    nombre;
    nivel;
    puntosDeVida;

    constructor(nombre, nivel, puntosDeVida) {
        this.nombre = nombre
        this.nivel = nivel
        this.puntosDeVida = puntosDeVida
    }

    valueOf() { return this.nivel }

    atacar(daño) { return `${this.nombre} ataca y hace ${daño} de daño` }
}

class Guerrero extends Personaje {
    fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza) {
        super (nombre, nivel, puntosDeVida) 
        this.fuerza = fuerza
    }

    golpeEspada(daño) { return `El guerrero ${this.nombre} ataca con la espada y hace ${daño} de daño` }
}

class Mago extends Personaje {
    mana;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super (nombre, nivel, puntosDeVida) 
        this.mana = mana
    }

    lanzarHechizo() { return `El mago ${this.nombre} lanza un hechizo de ${this.mana}` }
}

let mago1 
let mago2
let guerrero1
let guerrero2

let listaPersonajes = [
    mago1 = new Mago ("Alvaro", 1, 130, 20),
    mago2 = new Mago ("Koke", 8, 35, 10),
    guerrero1 = new Guerrero ("Dakis Bu", 3, 150, 30),
    guerrero2 = new Guerrero ("Guillermo", 10, 30, 10)
]

console.log("-- MAGOS --")
// MAGO 1
console.log(mago1)
console.log(mago1.atacar(20))
console.log(mago1.lanzarHechizo())

// MAGO 2
console.log(mago2)
console.log(mago2.atacar(50))
console.log(mago2.lanzarHechizo())

console.log("\n-- GUERREROS --")
// GUERRERO 1
console.log(guerrero1)
console.log(guerrero1.atacar(50))
console.log(guerrero1.golpeEspada(70))

// GUERRERO 2
console.log(guerrero2)
console.log(guerrero2.atacar(20))
console.log(guerrero2.golpeEspada(40))

console.log("\n-- LISTA ORDENADA --")
let listaPersonajesOrdenada = listaPersonajes.sort((a, b) => a - b)
console.log(listaPersonajesOrdenada)