/*Crie um programa que calcule a área de um quadrado, sendo que o comprimento 
do lado é informado pelo usuário. A área do quadrado é calculada 
elevando-se o lado ao quadrado.Use Math.pow para aplicar a potenciação.*/

// Entrada de dados
let ladoQuadrado = prompt("Digite o tamanho do lado de um quadrado");

//Validação dos dados
if (!ladoQuadrado) {
  alert("Você cancelou o programa ou digitou um valor nulo.");
} else if (isNaN(ladoQuadrado)) {
  alert("Digite um número válido");
} else {
  ladoQuadrado = Number(ladoQuadrado);

  //Processamento dos dados e Saída
  areaQuadrado = Math.pow(ladoQuadrado, 2);
  alert(`A área do quadrado é de ${areaQuadrado}m².`);
}
