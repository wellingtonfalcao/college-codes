let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 7: - Exibição de Letra Pressionada no Campo de Texto";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

7 Exibição de Letra Pressionada no Campo de Texto

Crie no arquivo HTML um campo de texto e um elemento "p".
Cada vez que o usuário pressionar uma tecla, exiba a letra pressionada em um parágrafo abaixo do campo.
*/

let input = document.querySelector("#input");
let paragrafo = document.querySelector("#paragrafo");

input.addEventListener("keydown", (letra) => {
  paragrafo.textContent += letra.key;
});


