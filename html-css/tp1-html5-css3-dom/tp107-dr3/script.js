/* 

7 Removendo uma propriedade de um objeto

No arquivo script.js, siga as etapas abaixo:

Remova a propriedade `ano de fundação`, do objeto “colegio" criado nos exercícios anteriores, 
através da remoção de propriedade.

Não recrie o objeto sem a propriedade. 
O objeto inicialmente terá tudo o que foi feito nos exercícios anteriores. 
Remova através de codificação.

*/

let nomeColegio = "Instituto Stella Almeida";
let anoFundacao = 1982;
let nomeDiretor = "Daniel";
let numeroAlunos = 350;
let telefone = "21 93214-2312";

let colegio = {
  ano: anoFundacao,
  nome: nomeColegio,
  diretor: nomeDiretor,
  alunos: numeroAlunos,
  telefone: telefone,
  obterDiretor() {
    return nomeDiretor;
  },
};

//Remover a propriedade através do comando delete e exibir objeto sem ano de fundação.
delete colegio.ano;
console.log(colegio);
