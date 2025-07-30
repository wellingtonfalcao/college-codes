/*
“script_11.js” → Crie um programa que calcule o novo valor de um salário a partir de um valor percentual de reajuste. 
O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário.
Ex: salário = 5432.10 (R$5.432,10) e o percentual = 7.3 (7,3%).
*/

// Entrada de dados
let salarioAtual = null;
let porcentagemReajuste = null;

salarioAtual = Number(prompt("Digite o valor do salário"));
porcentagemReajuste =
  Number(prompt("Digite o valor do reajuste em porcentagem")) / 100;

if (
  isNaN(salarioAtual) ||
  isNaN(porcentagemReajuste) ||
  salarioAtual <= 0 ||
  porcentagemReajuste <= 0
) {
  alert("Digite um valor numérico válido");
} else {
  //Processamento dos dados
  let salarioReajustado = salarioAtual * porcentagemReajuste + salarioAtual;
  let valorReajuste = salarioReajustado - salarioAtual;

  // Saída dos dados
  alert(
    `O salário de R$ ${salarioAtual.toFixed(2)} com ${
      porcentagemReajuste * 100
    }% de reajuste é de R$ ${salarioReajustado.toFixed(
      2
    )}. Uma diferença de R$ ${valorReajuste.toFixed(2)}. `
  );
}
