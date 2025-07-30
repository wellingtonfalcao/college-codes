let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 16: - Grupo - Função que mapeia um array";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberDesc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
import { fatorial } from "./func-formulas.js";

/* 

Exercício 16 Função que mapeia um array

No arquivo script.js, siga as etapas abaixo:

Crie uma função que recebe e mapeia um array, contendo 5 números.
Pergunte os números ao usuário e chame a função mapeadora.
Crie um novo array, contendo o valor da raiz quadrada de cada número do 
primeiro array em cada posição respectiva neste novo array.
Exiba este novo array.

*/
alert("Calculadora de raiz quadrada, digite a seguir 5 números, lhe retorno a raiz quadrada de cada.");


let numUser1 = parseFloat(prompt("Digite o 1º número").trim().replace(",", "."));
let numUser2 = parseFloat(prompt("Digite o 2º número").trim().replace(",", "."));
let numUser3 = parseFloat(prompt("Digite o 3º número").trim().replace(",", "."));
let numUser4 = parseFloat(prompt("Digite o 4º número").trim().replace(",", "."));
let numUser5 = parseFloat(prompt("Digite o 5º número").trim().replace(",", "."));

let arrayInicial = [numUser1,numUser2,numUser3,numUser4,numUser5];

let arrayRaizQuadrada = arrayInicial.map(numero => (numero**0.5).toFixed(2));

alert(`A raízes quadradas dos números ${arrayInicial.join(", ")} são respectivamente: ${arrayRaizQuadrada.join(", ")}`);