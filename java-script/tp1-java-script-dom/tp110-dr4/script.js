/*

Exercício 10: Embaralhando arrays.

Execute os passos definidos abaixo:

Crie um array com os itens: "justiça”, "persistência”, "otimismo”, "humildade”, "bondade”, 
"compaixão”, "empatia”, "perdão”, "honestidade”, "disciplina” e "coragem”.

Exiba uma frase padrão que use a palavra que está no índice 2.
Embaralhe o array usando a função sort.
Exiba novamente a mesma frase padrão que use a palavra que está no índice 2.
Observações:

Implemente da forma mais simples e objetiva possível.
Não use estruturas de controle de repetição.

*/

const adjetivos = [
  "justiça",
  "persistência",
  "otimismo",
  "humildade",
  "bondade",
  "compaixão",
  "empatia",
  "perdão",
  "honestidade",
  "disciplina",
  "coragem",
];

//Exibindo array na ordem atual
alert(`Para ser aprender programação é necessário ${adjetivos[2]}`);

//Ordenando o array de forma ascendente
adjetivosOrdenados = adjetivos.sort();
alert(`Para ser aprender programação é necessário ${adjetivos[2]}`);
