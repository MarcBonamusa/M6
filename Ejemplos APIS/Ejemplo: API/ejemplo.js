function init() {
    document.getElementById("masChistes").addEventListener("click",conectaAPI);
    }
    function conectaAPI(){
       fetch("https://api.chucknorris.io/jokes/random")
           .then(res => {
               if(res.ok)
                   // respuesta ok, ahora queremos el json con los datos.
                   return res.json()
               })
           .then(function (json) {
               console.log(json);
               //Tratamos la información recibida
               muestraChiste(json.value);
           });
    }
    function muestraChiste(chiste) {
       console.log(chiste)
       let div = document.getElementById("chistes")
       let p = document.createElement("p");
       p.textContent = chiste;
       div.appendChild(p);
    }
