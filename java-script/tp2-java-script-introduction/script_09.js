/*
“script_09.js” → Crie um programa que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. 
A área do quadrado é calculada elevando-se o lado ao quadrado. Use Math.pow para aplicar a potenciação. 
*/

//Entrada de dados
let valorLadoquadrado = Number(
  prompt("Digite o comprimento do lado um quadrado em centímetros")
);

//Processamento de dados
let areaDoQuadrado = Math.pow(valorLadoquadrado, 2);

//Saída de dados
alert(
  `A área de um quadrado com ${valorLadoquadrado} centímetros é de ${areaDoQuadrado} cm²`
);
