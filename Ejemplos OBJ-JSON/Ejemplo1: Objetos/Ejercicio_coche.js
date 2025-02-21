const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    encendido: false,

    arrancar: function() {
        console.log("El coche está arrancado jefe")
        this.encendido = true
    },

    apagar: function() {
        console.log("El coche está apagado jefe")
        this.encendido = false
    },

    kilometraje: 0,

    recorrer: function(km) {
        this.kilometraje += km
        console.log("Se han recorrido:", this.kilometraje, "kilómetros")
    }
};

console.log(coche)
console.log(coche.arrancar())
console.log(coche.apagar())
console.log(coche.recorrer(100))