let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 2: - Funções de Ordenação - Parte 1";

/* 
Exercício 2 Funções de Ordenação - Parte 1

Enunciado: Crie uma aplicação que implemente uma biblioteca 
com 2 funções: sortNumberAsc e sortNumberDesc, recebendo um array como parâmetro. 
Crie um array com 10 números e use esse array para testar as duas funções, 
exibindo o resultado em 2 alerts separados e sequenciais. 

Observações:

Utilize alert.
Implemente os métodos de forma a não alterar o array original.
Use o operador de spread.

*/

const array = [23,13,41,123,53,2,12,567,57,516];
alert(`Os números em ascendentes são: ${sortNumberAsc(array)}`);
alert(`Os números em descendentes são: ${sortNumberDesc(array)}`);
alert(`Array original é: ${array}`);