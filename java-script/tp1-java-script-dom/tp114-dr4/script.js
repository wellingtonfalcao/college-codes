/*

Exercício 14: Função que remove duplicatas.

Crie uma função que receba um array e retorna um outro array, 
removendo os elementos duplicados.

Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.
Use somente as funções aprendidas nas etapas 1 e 2.
Implemente um script demonstre a implementação.


*/
// Entrada - Array com duplicatas de exemplo
const arrayComDuplicatas = [1, 2, 3, 4, 5, 6, 7, 2, 8, 8, 9, 9, 10, 2, 4];

/*Processamento - usando filter() que verifica se o item 
sendo processado é igual a algun existente no array.*/
function removerDuplicatas(arr) {
  return arr.filter((numero, indice) => arr.indexOf(numero) === indice);
}

//Array com duplicados removidos
const arraySemDuplicatas = removerDuplicatas(arrayComDuplicatas);

alert(`O array final sem duplicatas é: ${arraySemDuplicatas}`);
