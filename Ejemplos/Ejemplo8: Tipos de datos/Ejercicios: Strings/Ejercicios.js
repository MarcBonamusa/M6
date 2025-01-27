let str = prompt("Introduce una palabra");
/*
// Ejercicio 1
function conAs(str) {
    if (str.startsWith('As') || str.startsWith('as')) {
        return str;
    } else {
        return 'As' + str;
    }
}

alert(`El string es: ${conAs(str)}`);

// Ejercicio 2
let pos = parseInt(prompt("Introduce un número"));

function eliminaCaracterPosicion(str, pos) {
    if (pos < str.length) {
        return str.slice(0, pos) + str.slice(pos + 1);
    } else {
        return str;
    }
}

alert(`El string es: ${eliminaCaracterPosicion(str, pos)}`);

// Ejercicio 3
function cambiar(str) {
    if (str.length > 0) {
        return str.charAt(str.length - 1) + str.slice(1, -1) + str.charAt(0);
    } else {
        return str;
    }
}

alert(`El string intercambiado es: ${cambiar(str)}`);
*/
// Ejercicio 4
function separarVocalesDeConsonantes(str) {
    let vocales = '';
    let consonantes = '';
    
    for (let i = 0; i < str.length; i++) {
        if ('aeiouAEIOU'.includes(str[i])) {
            vocales += str[i];
        } else if (/[a-zA-Z]/.test(str[i])) {
            consonantes += str[i];
        }
    }
    
    return vocales + consonantes;
}

alert (`Resultado: ${separarVocalesDeConsonantes(str)}`)