let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 13: - Fatorial";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
import { fatorial } from "./func-formulas.js";

/* 

Exercício 13 Grupo - Fatorial

No arquivo script.js, siga as etapas abaixo:

Solicite um número ao usuário.
Crie uma função para calcular o fatorial de um número, sendo este número informado pelo usuário através do prompt.
Chame esta função passando o número informado pelo usuário.

*/

function calcularFatorial() {
    let numeroUsuario = prompt("Digite um número para calcular seu fatorial.");

    if(numeroUsuario === null){
        alert("Programa cancelado pelo usuário."); 
    } else if(isNaN(numeroUsuario.trim()) || numeroUsuario.trim() === ""){
        alert("Digite um valor válido");
        return calcularFatorial() 
    }
    // alert que chama a função fatorial em func-formulas.js
    alert(`O fatorial do número ${numeroUsuario} é ${fatorial(numeroUsuario)}`);
}

calcularFatorial();


  
