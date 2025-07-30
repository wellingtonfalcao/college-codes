/*

Exercício 1: Criação e índices de Arrays.

Execute os passos definidos abaixo:

Crie um array com os itens: "Vermelho", "Amarelo", "Laranja", “Verde” e “Azul”.
Exiba o array com alert.
Exiba o tamanho da sua lista usando alert.
Substitua o item que está no índice 2 por “Cinza”.
Exiba o array com alert.
Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.

*/
//Entrada
let cores = ["Vermelho", "Amarelo", "Laranja", "Verde", "Azul"];
alert(`Array de cores: ${cores}`);

//Exibir quantidade de itens
alert(`Comprimento do array é de ${cores.length} itens.`);

//Alterar item de indice 2 e exibir array com nova cor
cores[2] = "Cinza";
alert(`Array de cores: ${cores}`);
