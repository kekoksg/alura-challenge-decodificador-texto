// Valida texto se possui letras maiusculas ou acentos
function validaTexto(texto) {
    var regex = /[A-ZÀ-ÿ]/;
    return !regex.test(texto);
}

// Listas de mapeamento
var listaCriptografica = ["enter", "imes", "ai", "ober", "ufat"];
var listaNormal = ["e", "i", "a", "o", "u"];

// Criptografar texto
function criptografaTexto(texto) {
    if (!validaTexto(texto)) {
        alert("O texto não deve conter letras maiúsculas ou acentos.");
        return null;
    }
    for (var i = 0; i < listaNormal.length; i++) {
        texto = texto.replaceAll(listaNormal[i], listaCriptografica[i]);
    }
    return texto;
}

// Descriptografar texto
function descriptografaTexto(texto) {
    if (!validaTexto(texto)) {
        alert("O texto não deve conter letras maiúsculas ou acentos.");
        return null;
    }
    for (var i = 0; i < listaCriptografica.length; i++) {
        texto = texto.replaceAll(listaCriptografica[i], listaNormal[i]);
    }
    return texto;
}

// Criptografar e atualizar o texto na tela
function criptografa() {
    var campoTexto = document.getElementById("main-text");
    var textoCriptografado = criptografaTexto(campoTexto.value);
    if(textoCriptografado == null) {
        return;
    }
    atualizaTextoCriptografado(textoCriptografado);
}

// Descriptografar e atualizar o texto na tela
function descriptografa() {
    var campoTexto = document.getElementById("main-text");
    var textoDescriptografado = descriptografaTexto(campoTexto.value);
    if(textoDescriptografado == null) {
        return;
    }
    atualizaTextoCriptografado(textoDescriptografado);
}

// Atualizar o texto criptografado na tela
function atualizaTextoCriptografado(texto) {
    var campoVazio = document.querySelector(".no-message");
    var campoPreenchido = document.querySelector(".encrypted-text");
    var paragrafo = document.querySelector(".encrypted-text p");

    campoVazio.classList.add("d-none");
    campoPreenchido.classList.remove("d-none");
    paragrafo.textContent = texto;
}

// Copiar o texto
function copiarTexto() {
    var textoCopiado = document.querySelector(".encrypted-text p").textContent;
    navigator.clipboard.writeText(textoCopiado).then(function() {
        alert("Texto copiado");
    });
}

// Adiciona eventos aos botões
document.getElementById("encrypt").addEventListener("click", criptografa);
document.getElementById("decrypt").addEventListener("click", descriptografa);
document.getElementById("copy").addEventListener("click", copiarTexto);
