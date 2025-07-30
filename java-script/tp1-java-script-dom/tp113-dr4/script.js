/*

Exercício 13: Funções primeiros e últimos.

Crie duas funções que recebam um array e um número: a primeira retorna os 
primeiros n elementos do array e a segunda os n últimos elementos do array.

Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.
Implemente um script demonstre a implementação.

*/

//

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const nElementos = 0;

const nPrimeiros = (array, n) => {
  return array.slice(0, n);
};

const nUltimos = (array, n) => {
  return array.slice(array.length - n, array.length);
};

// Exibir os arrays
alert(
  `Primeira possibilidade:\nListar os n primeiros itens: ${nPrimeiros(
    array,
    nElementos
  )}\nListar os n ultimos itens: ${nUltimos(array, nElementos)}`
);
