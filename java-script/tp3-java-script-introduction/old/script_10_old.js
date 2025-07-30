// Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos.
// Construa um programa que obtenha a quantidade de doces fabricados e a capacidade da caixa e informe quantas caixas completas
// vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
// Considere a distribuição dos doces por caixas grandes (com 100 doces),
// médias (com 50 doces) e pequenas (com 20 doces).

//Entrada de dados
let quantidadeDoces = prompt("Digite a quantidade de doces");
quantidadeDoces = Number(quantidadeDoces);

//Validação da entrada de dados
if (!quantidadeDoces) {
  alert("Programa encerrado: Você cancelou ou digitou um valor nulo.");
} else if (quantidadeDoces < 0) {
  alert("Programa encerrado: Valor negativo não é válido.");
} else if (!Number.isInteger(quantidadeDoces)) {
  alert("Programa encerrado: Não é permitido valor fracionado");
} else {
  
  // Processamento para caixas de 100 doces
  let caixa100Doces = quantidadeDoces / 100;
  if (Number.isInteger(caixa100Doces)) {
    alert(
      `A quantidade de caixas necessárias é de ${caixa100Doces} para os ${quantidadeDoces} doces.`
    );
  } else {

    // Processamento para caixas de 50 doces
    let resto100 = quantidadeDoces % 100;
    let caixa50Doces = resto100 / 50;

    if (Number.isInteger(caixa50Doces)) {
      alert(`${quantidadeDoces} doces ocupam:
        ${Math.floor(caixa100Doces)} caixa(s) de 100 unidades; 
        ${caixa50Doces} caixa(s) de 50 unidades.`);
    } else {

      // Processamento para caixas de 20 doces
      let resto50 = quantidadeDoces % 50;
      let caixa20Doces = resto50 / 20;

      if (Number.isInteger(caixa20Doces)) {
        alert(`${quantidadeDoces} doces ocupam:
            ${Math.floor(caixa100Doces)} caixa(s) com 100 unidades; 
            ${Math.floor(caixa50Doces)} caixa(s) com 50 unidades.;
            ${Math.floor(caixa20Doces)} caixa(s) com 20 unidades.`);
      } else {
        alert(`${quantidadeDoces} doces ocupam:
            ${Math.floor(caixa100Doces)} caixa(s) com 100 unidades; 
            ${Math.floor(caixa50Doces)} caixa(s) com 50 unidades.;
            ${Math.floor(caixa20Doces)} caixa(s) com 20 unidades.`);
      }
    }
  }
}
