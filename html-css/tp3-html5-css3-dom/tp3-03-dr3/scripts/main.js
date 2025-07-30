let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 3: - Formulário com Mensagem de Seleção e Exibição de Opção Escolhida";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

3 Formulário com Mensagem de Seleção e Exibição de Opção Escolhida

Crie uma página HTML com um formulário, nele crie um campo de seleção (select). 
Quando o campo de seleção receber foco, exiba uma mensagem 
"Selecione uma opção". Quando o campo de seleção mudar, 
exiba a opção escolhida em um elemento "p" abaixo.

*/

let select = document.querySelector("#opcoes");
let mensagem = document.querySelector("#mensagem");


select.addEventListener("focus", () => {
  mensagem.textContent = "Selecione uma opção";
});

select.addEventListener("change", () => {
  if (select.value !== "") {
    mensagem.textContent = `Você escolheu: ${select.value}`;
  } else {
    mensagem.textContent = "";
  }
});