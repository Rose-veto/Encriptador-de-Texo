var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var muneco = document.querySelector(".contenedormuneco");
var contenedorParrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function validarTexto(texto) {
    var regex = /^[a-z\s]+$/; // Permite solo letras minúsculas y espacios
    return regex.test(texto);
}

function encriptar() {
    var texto = recuperarTexto();
    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }
    ocultarAdelante();
    resultado.textContent = encriptarTexto(texto);
}

function desencriptar() {
    var texto = recuperarTexto();
    if (!validarTexto(texto)) {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return;
    }
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(texto);
}


function recuperarTexto() {
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(texto) {
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal += "ai";
        } else if (texto[i] == "e") {
            textoFinal += "enter";
        } else if (texto[i] == "i") {
            textoFinal += "imes";
        } else if (texto[i] == "o") {
            textoFinal += "ober";
        } else if (texto[i] == "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(texto) {
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto.substring(i, i + 2) == "ai") {
            textoFinal += "a";
            i += 1;
        } else if (texto.substring(i, i + 5) == "enter") {
            textoFinal += "e";
            i += 4;
        } else if (texto.substring(i, i + 4) == "imes") {
            textoFinal += "i";
            i += 3;
        } else if (texto.substring(i, i + 4) == "ober") {
            textoFinal += "o";
            i += 3;
        } else if (texto.substring(i, i + 4) == "ufat") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", function () {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido).then(function () {
        alert("Texto copiado al portapapeles");
    });
});
