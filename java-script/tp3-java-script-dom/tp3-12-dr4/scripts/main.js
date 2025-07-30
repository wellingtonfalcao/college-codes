let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 12: - 20º número de Fibonacci";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";
import { fibonacci } from "./func-formulas.js";

/* 

Exercício 12 Grupo - 20º número de Fibonacci

No arquivo script.js, crie um programa que calcule o 20º número da sequência de Fibonacci.

Observações:

Utilize uma estrutura de repetição (while ou for).
O programa deve exibir o número através de um “console.log”.

*/

//Chamar a função em func-formulas.js fornancendo o numero como argumento
fibonacci(20);