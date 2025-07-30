/* 
“script_04.js” → Crie um programa que solicite o valor da conta de restaurante e a quantidade de pessoas, 
calcule a gorjeta de 10% e exiba o resultado total e o valor por pessoa.
 */

//Entrada dos dados
let valorConta = Number(prompt("Digite o valor total da conta:"));
let quantidadePessoas = Number(prompt("Quantas pessoas dividirão a conta?"));

//Processamento dos dados
let valorGorjeta = valorConta * 0.1;
let valorTotalConta = (valorConta + valorGorjeta).toFixed(2);
let ValorTotalPorPessoa = (valorTotalConta / 4).toFixed(2);

//Saída dos dados
alert(
  `O valor por pessoa (incluindo gorjeta de 10%) é de R$ ${ValorTotalPorPessoa}, sendo o valor total da conta R$ ${valorTotalConta}.`
);
