let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 1: - Caixa Interativa com Hover e Clique";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

1 - Caixa Interativa com Hover e Clique

Crie no arquivo HTML a exibição de uma caixa colorida que muda de cor quando o 
mouse passa sobre ela (hover) e que exiba uma mensagem quando o mouse é clicado dentro dessa mesma caixa.

*/

let caixa = document.querySelector(".caixa");
caixa.addEventListener("mouseover", () => {
    caixa.style.backgroundColor = "green";
});

caixa.addEventListener("click", () => {
    alert("Quadrado foi clicado.")
});
