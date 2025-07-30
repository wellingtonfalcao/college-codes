/*
“script_08.js” → Um motorista deseja abastecer seu carro com um valor em reais e quer saber se é melhor usar álcool ou gasolina. 
Escreva um programa para ler o preço do litro de cada combustível e informe qual é o mais vantajoso. 
O cálculo básico para se descobrir se o álcool é vantajoso ou não em relação à gasolina é simples: basta dividir o preço do litro 
do álcool pelo da gasolina. 
Se o resultado for inferior a 0,7 - use álcool, caso contrário abasteça com gasolina.
*/


// Entrada de dados
let valorGasolina = Number(prompt("Digite o valor do litro da gasolina"));
let valorAlcool = Number(prompt("Digite o valor do litro do alcool"));
let melhorRendimento = valorAlcool / valorGasolina;


// Verificar se a entrada de dados é um número ou um número menor/igual a zero.
if(isNaN(valorGasolina) || isNaN(valorAlcool) || valorAlcool <= 0 || valorGasolina <= 0){
  alert("Digite um valor válido");
} else {

  if (melhorRendimento >= 0.7) {
    alert("Abasteça com gasolina");
  } else {
    alert("Abasteça com alcool");
  }

}


