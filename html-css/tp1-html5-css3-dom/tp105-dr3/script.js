/* 

5 Adicionando propriedades em objeto

No arquivo script.js, adicione ao objeto “colegio” criado no 
exercício anterior: “nomeDiretor”, "numeroAlunos" e “telefone”.

*/

let nomeColegio = "Instituto Stella Almeida";
let anoFundacao = 1982;

let colegio = {
  ano: anoFundacao,
  nome: nomeColegio,
};

//Adicionando novas propŕiedades

colegio.nomeDiretor = "Daniel";
colegio.numeroAlunos = 350;
colegio.telefone = "21 93214-2312";

console.log(colegio);
