let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 9: - Drag-and-Drop de Texto para Área Demarcada";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

9 Drag-and-Drop de Texto para Área Demarcada

Crie um arquivo HTML que permita arrastar um texto que está em um elemento "p" 
para uma área de texto criada por você, que pode ser uma <div> que apenas possua demarcação visual 
mostrando sua área (um retângulo com bordas pontilhadas, por exemplo). 
Faça com que o usuário possa arrastar o texto pela tela, quando o texto for solto na área, 
ele deve ser inserido na área de texto.

*/

let texto = document.querySelector("#texto");
let caixa = document.querySelector("#caixa");


texto.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", texto.id);
})

caixa.addEventListener("dragover", (event) => {
    event.preventDefault();
})

caixa.addEventListener("drop", (event) => {
    const id = event.dataTransfer.getData("text/plain");
    const bola = document.getElementById(id);
    caixa.appendChild(bola);
})


