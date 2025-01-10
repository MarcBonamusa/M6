function imprimirTriangulo() {
    for (let i = 1; i <= 6; i++) {
        let linea = "";
        for (let j = 0; j < i; j++) { 
            linea += "*";
        }
        console.log(linea);
    }
    console.log("||");
}
imprimirTriangulo();