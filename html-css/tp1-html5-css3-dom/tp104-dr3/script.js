/* 
04 - Criando objeto à partir de variáveis

No arquivo script.js, siga as etapas abaixo:

Crie duas variáveis contendo:
O nome de um `colégio`.
O `ano de fundação` deste colégio.
Crie um objeto “colegio` que possua propriedades que utilize estas variáveis.

*/

let nomeColegio = "Instituto Stella Almeida";
let anoFundacao = 1982;

let colegio = {
    ano: anoFundacao,
    nome: nomeColegio
}
//Exibir dados no console;
console.log(`O Colégio ${colegio.nome} foi fundado em ${colegio.ano}.`);


