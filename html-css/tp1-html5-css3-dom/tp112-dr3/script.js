/* 

12- Grupo - Objetos aninhados

No arquivo script.js, siga as etapas abaixo:

Crie um objeto “cidade”. Este objeto vai conter:
Uma propriedade para “nome”.
Uma propriedade para “ano de fundação”.
Uma propriedade que será um objeto “prefeito”.
O objeto “prefeito” que está dentro do objeto “cidade” possui:
Uma propriedade para o “nome”.
Uma propriedade para a “idade”.
*/

const cidade = {
  nome: "Rio de Janeiro",
  fundacao: 1565,
  prefeito: {
    nome: "Eduardo Paes",
    idade: 55,
  },
};

// Acessando o nome do prefeito
alert(
  `A cidade ${cidade.nome} foi fundada em ${cidade.fundacao} e tem como atual prefeito(a) ${cidade.prefeito.nome} que possui ${cidade.prefeito.idade} anos.`
);
