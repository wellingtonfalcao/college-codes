/*

Exercício 11: Achando os números máximo e o mínimo em um array.

Execute os passos definidos abaixo:

Crie um array com os itens: 123, 765, 876, 345, 908, 432, 789, 654 e 234.
Exiba o valor máximo e o valor mínimo do array.
Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.

*/

// Usando uma lógica com as funções aprendidas
const valores = [123, 765, 876, 345, 908, 432, 789, 654, 234];
const valorMin = valores.sort((a, b) => a - b);
const valorMax = valorMin.at(-1);

alert(`o valor mínimo é: ${valorMin[0]} e o valor máximo é ${valorMax}`);

// --- Alternativa mais simples com função Math.min e Math.max e spread operator
const valorMin2 = Math.min(...valores);
const valorMax2 = Math.max(...valores);

alert(`o valor mínimo é: ${valorMin2} e o valor máximo é ${valorMax2}`);

//-------
