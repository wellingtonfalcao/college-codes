/*

Exercício 6: Encontrando o elemento que atende a uma condição.

Execute os passos definidos abaixo:

    Crie um array com os itens: “Jazz”, “Samba”, “Rock”, “Sertanejo”, “Bossa Nova”, “Pagode” e “Funk”.
    Exiba o array resultante com alert.
    Exiba o primeiro elemento que tiver 9 ou mais letras e seu índice.
    Crie um novo array com os elementos que tiverem 9 ou mais letras.
    Exiba o array resultante com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.


*/

let estilosMusicais = [
  "Jazz",
  "Samba",
  "Rock",
  "Sertanejo",
  "Bossa Nova",
  "Pagode",
  "Funk",
];

//Exibir lista de estilos musicais
alert(`Lista de estilos musicais: ${estilosMusicais}`);

let primeiroItem9letras = estilosMusicais.find((item) => item.length >= 9);

//Exibirá o primeiro item da lista que tem 9 ou mais letras, no caso Sertenejo.
alert(`Primeiro item da lista com 9 ou mais letras: ${primeiroItem9letras}`);

let todosItens9letras = estilosMusicais.filter((item) => item.length >= 9);

//Exibirá o todos os itens da lista que tem 9 ou mais letras, no caso Sertanejo e Bossa Nova.
alert(`Todos os itens da lista com 9 ou mais letras: ${todosItens9letras}`);
