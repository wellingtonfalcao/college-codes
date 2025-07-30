/*

Exercício 12 (GRUPO): Função Clone.

Crie duas versões de função que retorne o clone de um array.

Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição
Implemente um script demonstre a implementação.

*/

// Método de fazer um slice do array original
const clonarArray1 = (array) => {
  const arrayClonado = array.slice();
  return arrayClonado;
};

// Método usando espalhamento com spread operator
const clonarArray2 = (array) => {
  return [...array];
};

//Array que será clonado
const array = [1, 2, 3, 4, 5, 6];

const arrayClonado = clonarArray1(array);
const arrayClonado2 = clonarArray2(array);

alert(
  `Array clonado pelo slice():\n${arrayClonado}\nArray clonado por função com spread operator:\n${arrayClonado2}\n`
);
