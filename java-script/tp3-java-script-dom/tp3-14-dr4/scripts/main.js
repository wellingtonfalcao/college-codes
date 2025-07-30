let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 14: - Ordem decrescente";

//import { gerarNumeros } from "./func-random.js";
import { sortNumberDesc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
//import { fatorial } from "./func-formulas.js";

/* 

Exercício 14 Grupo - Ordem decrescente

No arquivo script.js, siga as etapas abaixo:

Crie uma função que irá receber 3 valores por parâmetro e ordená-los em ordem decrescente.
Exiba esta ordem
Peça para o usuário digitar os valores e realize a chamada da função.
Exiba a ordem dos números.

*/

function ordenarDecrescente(num1, num2, num3) {
    let numeros = [num1, num2, num3];  
    return sortNumberDesc(numeros); //chama a função em func-ordenacao.js
}

// Pedir os valores ao usuário
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

// Chamar a função e obter o resultado ordenado
let numerosOrdenados = ordenarDecrescente(valor1, valor2, valor3);

alert("Valores em ordem decrescente: " + numerosOrdenados.join(", "));