/*

Exercício 9: Ordenando arrays - parte 3.

Execute os passos definidos abaixo:

Crie um array com os itens: “Javascript”, “Kotlin”, “C”, “Rust”, “Python”, “Go” e “Basic”.
Exiba o array resultante com alert.
Ordene o array de forma ascendente, criando um novo array.
Exiba o array resultante com alert.
Ordene o array de forma descendente, criando um novo array.
Exiba o array resultante com alert.
Junte o array ascendente com o descendente.
Exiba o array resultante com alert.
Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.

*/

//Array com a lista de dados
const lingPrg = ["Javascript", "Kotlin", "C", "Rust", "Python", "Go", "Basic"];
alert(`Array com lista de linguagens de programação: ${lingPrg}`);

//Array ordenado de forma ascendente
lingPrgAsc = lingPrg.sort();
alert(
  `Array com lista de linguagens de programação em ordem ascendente: ${lingPrgAsc}`
);

//Array ordenado de forma descendente
lingPrgDsc = lingPrg.reverse();
alert(
  `Array com lista de linguagens de programação em ordem descendente: ${lingPrgDsc}`
);

//Array ordenado de forma ascendente concatenada com descendente
lingPrgCnc = lingPrgAsc.concat(lingPrgDsc);
alert(
  `Array com lista de linguagens de programação em ordem ascendente e descendente: ${lingPrgCnc}`
);
