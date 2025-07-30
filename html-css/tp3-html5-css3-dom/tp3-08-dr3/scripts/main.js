let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 8: - Exibição de Valor ao Perder Foco no Campo de Texto";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

8 Exibição de Valor ao Perder Foco no Campo de Texto

Crie no arquivo HTML um formulário e nele um campo de texto. 
Quando o campo de entrada perder o foco, exiba o valor digitado 
em um parágrafo abaixo do campo de texto.

*/

let input = document.querySelector("#input");
let paragrafo = document.querySelector("#paragrafo");

input.addEventListener("focusout", () => {
  paragrafo.textContent = input.value
});

