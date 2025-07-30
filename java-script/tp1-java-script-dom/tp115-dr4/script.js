/*

Exercício 15: Função que junta arrays e remove duplicatas.

Crie uma função que receba dois arrays e retorne um outro array, 
juntando os dois arrays e removendo os elementos duplicados.

Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.
Use somente as funções aprendidas nas etapas 1 e 2.
Implemente um script demonstre a implementação.

*/

//2 Arrays declarados com numeros repetidos
array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 10];
array2 = [11, 12, 13, 14, 15, 15, 16, 17, 18, 5, 19, 20];

//Arrow functions que pega 2 arrays, concatena e posteriormente filtra repetidos.
const juntarArray = (arr1, arr2) => {
  //concatenar os arrays
  const arrayJuntado = arr1.concat(arr2);

  //filtrar elementos repetidos
  const removidoduplicatas = arrayJuntado.filter((num, indice) => {
    return arrayJuntado.indexOf(num) === indice;
  });
  return removidoduplicatas;
};

// exibir os arrays juntados e com duplicatas removidas
alert(
  `O array final ao juntar e remover duplicatas é: ${juntarArray(
    array1,
    array2
  )}`
);
