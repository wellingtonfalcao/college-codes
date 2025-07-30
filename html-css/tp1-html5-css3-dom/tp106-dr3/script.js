/* 

6 - Adicionando método em objeto

No arquivo script.js, continuando o que foi feito no exercício anterior, siga as etapas abaixo:

    Adicione um método chamado “obterDiretor” que, ao ser chamado, mostra o nome do `diretor` do colégio.
    Chame o método “obterDiretor” a partir do objeto.

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

//Obter nome do diretor por método
console.log(colegio.obterDiretor());
