/*

Exercício 7: Ordenando arrays - parte 1.

Execute os passos definidos abaixo:

    Crie um array com os itens: “Dinamarca”, “Inglaterra”, “Portugal”, “Noruega”, “Espanha”, “Alemanha”, “França” e “Itália”.
    Exiba o array resultante com alert.
    Ordene o array de forma ascendente.
    Exiba o array resultante com alert.
    Ordene o array de forma descendente.
    Exiba o array resultante com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.

*/

let listaPaises = [
  "Dinamarca",
  "Inglaterra",
  "Portugal",
  "Noruega",
  "Espanha",
  "Alemanha",
  "França",
  "Itália",
];

alert(`Lista de países: ${listaPaises}`);

//Usando sort() simples para ordenar as strings no modo padrão de ordem alfabetica.
alert(`Listas de países em ordem ascendente: ${listaPaises.sort()}`);

//Usando sort() ordenando os itens em ordem descendente com uso do localeCompare() que usa definições da escrita cultural.
alert(`Listas de países em ordem descendente: ${listaPaises.reverse()}`);
