let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 2: - Detecção de Letra no Campo de Texto";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

2 Detecção de Letra no Campo de Texto

Crie no arquivo HTML um formulário com um campo de texto. Quando o usuário digitar a letra "A", 
exiba uma mensagem dizendo "Você pressionou a letra A". Caso contrário, exiba uma mensagem que diga 
"Você pressionou uma letra diferente da solicitada"..

*/

//Fiquei na dúvida se precisa ser em caixa alta apenas, considerei ambas
let input = document.querySelector("input");
input.addEventListener("keydown", (tecla) => {
      tecla.key === "A" || tecla.key === "a"
        ? alert("Você pressionou a letra A")
        : alert("Você pressionou uma letra diferente da solicitada");
});
