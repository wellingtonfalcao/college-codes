let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 15: - Grupo - Fatorial simples";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberDesc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
import { fatorial } from "./func-formulas.js";

/* 

Exercício 15 Grupo - Fatorial simples

No arquivo script.js, siga as etapas abaixo:

Crie uma função para calcular o fatorial de um número.
Este número será informado pelo usuário através do prompt.
Chame a função criada passando o número digitado pelo usuário.
O resultado deve ser exibido em uma tag <p> criado no seu HTML.
Observação: Utilize recursão.

*/


function calcularFatorial() {
    let numeroUsuario = prompt("Digite um número para calcular seu fatorial.");

    if(numeroUsuario === null){
        alert("Programa cancelado pelo usuário.");
        return 0; 
    } else if(isNaN(numeroUsuario.trim()) || numeroUsuario.trim() === ""){
        alert("Digite um valor válido");
        return calcularFatorial() 
    }
    let resultadoFatorial = fatorial(numeroUsuario);
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = `O fatorial do número ${numeroUsuario} é ${resultadoFatorial}`
}

calcularFatorial();