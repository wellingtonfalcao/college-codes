let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 12: - Drag Drop 1";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

12 Grupo - Drag Drop 1

Utilizando a explicação do CodeSandbox como base, no arquivo script.js crie um programa, que permita:

Mover os elementos div de classe “caixinha” para os elementos <div class='container'>
Arrastar os elementos div de classe “caixinha” entre os elementos <div class='container'>
Link: https://codesandbox.io/p/sandbox/2n7w43
Observação: Faça as modificações necessárias no arquivo “index.html” para resolver o exercício.

*/


// - Evento drag

// O evento `drag` ocorre quando um elemento, é `arrastado` 
// pelo usuário. Ele é `disparado` no elemento que está sendo 
// arrastado. Para habilitar o `arrastar` de um elemento, 
// é necessário definir o atributo `draggable`, como `true` 
// para esse elemento. Além disso, é necessário adicionar um 
//`ouvinte de evento`, para o evento `dragstart` no elemento 
// arrastado, que define os dados a serem `transferidos` durante
// o arrastar, utilizando o método `setData` do objeto `dataTransfer`

const containers = document.querySelectorAll(".container");
const caixinhas = document.querySelectorAll("#novo div");

caixinhas.forEach((caixinha, index) => {
    caixinha.id = "caixina" + index
    caixinha.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", caixinha.id);              
    });
});

// - Evento drop

// O evento `drop` ocorre quando um elemento arrastado, é `solto` em 
// um alvo `válido`. Ele é `disparado` no elemento de destino, onde 
// o `elemento arrastado` está sendo `solto`. Para `permitir` que um 
// elemento seja `solto` em um `alvo`, é necessário adicionar um 
// `ouvinte de evento`, para o evento `dragover` no elemento de destino 
// e, dentro desse ouvinte, chamar o método `preventDefault()` para 
// permitir que o elemento seja solto. Além disso, é necessário adicionar 
// um ouvinte de evento para o evento `drop` no elemento de destino, onde 
// a `lógica` para manipular os `dados transferidos` é implementada.

containers.forEach(container => {
    container.addEventListener("dragover", (event) => {
        event.preventDefault(); 
    });
    
    container.addEventListener("drop", (event) => {        
        const id = event.dataTransfer.getData("text/plain");
        const caixinhaMovida = document.getElementById(id);
        container.appendChild(caixinhaMovida);       
    });
});


