/*

Exercício 16: Função que acha o enésimo maior número em um array.

Crie uma função que receba um array e um número inteiro e retorne o 
enésimo maior elemento do array. Por exemplo, se passar um array 
com 10 números e o número 4, a função deve retornar o quarto maior número desse array.

Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.
Use somente as funções aprendidas nas etapas 1 e 2.
Implemente um script demonstre a implementação.


*/

//Entrada
let arrayInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const enesimoMaior = 4;

/*Processamento - inverter a ordem do array ordenado para descendente 
e pegar o enesimo maior numero na variavel -1 por considerar o 0 */

let localizarEnesimo = (arr) => arr.reverse()[enesimoMaior - 1];

alert(
  `O ${enesimoMaior}º maior número do array é ${localizarEnesimo(
    arrayInteiros
  )}`
);
