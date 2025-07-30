let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 4: - Drag-and-Drop de Imagem para Caixa";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

4 Drag-and-Drop de Imagem para Caixa

Crie no arquivo HTML uma imagem e uma caixa e faça com que o usuário possa arrastar a 
imagem até ficar sobre a caixa, e quando a imagem for solta na caixa, exiba a imagem dentro da caixa.

*/
let imagem = document.querySelector("#bola");
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