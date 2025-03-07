class TarjetaCredito{
  nombreTitular;
  numeroTarjeta;
  fechaCaducidad;
  #cvv;
  #estado;
  #saldo;

  constructor(nombreTitular, numeroTarjeta, fechaCaducidad, cvv, estado, saldo) {
    this.nombreTitular = nombreTitular
    this.numeroTarjeta = numeroTarjeta
    this.fechaCaducidad = fechaCaducidad
    this.#cvv = cvv
    this.#estado = estado
    this.#saldo = saldo
  }

  // METODOS
  activar() { return this.estado = true }
  anular() { return this.estado = false }
  pagar(precio) { return this.saldo - precio }
  cambiarPin(nuevoPin) { return this.#cvv = nuevoPin }

  // GETTERS
  get cvv() { return this.#cvv }
  get estado() { return this.#estado }
  get saldo() { return this.#saldo }
  
  // SETTERS
  set cvv(cvv) { this.#cvv = cvv }
  set estado(estado) { this.#estado = estado }
  set saldo(saldo) { this.#saldo = saldo }

}

// Instancia 3 objetos diferentes.
const visa = new TarjetaCredito ("Guillermo Mir", 6455464156, "12/25", 312, true, 0.8)
console.log(visa)
const masterCard = new TarjetaCredito ("Marc Bonamusa", 6449664156, "6/27", 543, false, 100)
console.log(masterCard)
const americanExpres = new TarjetaCredito ("Daniel Alarcon", 9475464156, "7/26", 472, true, -2000)
console.log(americanExpres)