/*

Exercício 5: Buscando e extraindo elementos de um array.

Execute os passos definidos abaixo:

    Crie um array com os itens: "Machado de Assis", "Clarice Lispector", "Rubem Fonseca", “Rachel de Queiroz”, “Itamar Vieira Jr.” e “Cora Coralina”.
    Exiba o array resultante com alert.
    Exiba se “Rachel de Queiroz” pertence ao array.
    Exclua “Rachel de Queiroz” do array.
    Exiba o array resultante com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.

*/

let autores = [
  "Machado de Assis",
  "Clarice Lispector",
  "Rubem Fonseca",
  "Rachel de Queiroz",
  "Itamar Vieira Jr.",
  "Cora Coralina",
];

alert(`Lista com autores: ${autores}`);

//Localizar Rachel de Queiroz e saber seu índice no array

let removerAutor = "Rachel de Queiroz";
let indiceRemoverAutor = autores.indexOf(removerAutor);

//Método para remover o autor.
if (indiceRemoverAutor !== -1) {
  // Verifica se existe o indice
  autores.splice(indiceRemoverAutor, 1);
}

alert(`Lista dos autores com autor removido: ${autores}`);
