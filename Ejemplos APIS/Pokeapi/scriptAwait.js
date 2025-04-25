function init() {
    document.getElementById("boton").addEventListener("click", conectaAPI);
}

async function conectaAPI(){
    let id = Math.floor(Math.random() * 1025);
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await response.json();
        console.log("Pokémon obtenido:", data);

        muestraPokemon(data.name, data.sprites.front_default);
    } catch (error) {
        console.error("Error al obtener datos", error);
    }
}

function muestraPokemon(nombre, imagenURL) {
    console.log(nombre);
    let div = document.getElementById("pokemon");

    let p = document.createElement("p");
    p.textContent = nombre;

    let img = document.createElement("img");
    img.src = imagenURL;
    img.alt = nombre;
    img.style.width = "150px";
    img.style.height = "150px";

    div.appendChild(p);
    div.appendChild(img);
}