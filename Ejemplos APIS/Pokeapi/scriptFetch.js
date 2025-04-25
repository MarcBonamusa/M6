
function init() {
    document.getElementById("boton").addEventListener("click", conectaAPI);
}

function conectaAPI(){
    let id = Math.floor(Math.random() * 1025);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
       .then(res => {
           if(res.ok)
               return res.json();
       })
       .then(function (json) {
           console.log(json);
           // Enviamos tanto el nombre como la imagen
           muestraPokemon(json.name, json.sprites.front_default);
       });
}

function muestraPokemon(nombre, imagenURL) {
    console.log(nombre);
    let div = document.getElementById("pokemon");

    let p = document.createElement("pa");
    p.textContent = nombre;

    let img = document.createElement("img");
    img.src = imagenURL;
    img.style.width = "150px";
    img.style.height = "150px";

    div.appendChild(p);
    div.appendChild(img);
}