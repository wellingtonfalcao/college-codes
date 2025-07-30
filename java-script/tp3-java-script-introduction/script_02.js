/* Crie um programa que calcule a área de um retângulo,
sendo que os comprimentos da altura e da base são números inteiros 
informados pelo usuário. A área do retângulo 
é calculada multiplicando-se a altura pela base. */

// Entrada de dados
alert("Vamos calcular a área de um triângulo, utilize apenas números inteiros.");
let baseRetangulo = Number(prompt("Digite a base do retangulo").replace(",","."));

//Validação da entrada da base
if (!baseRetangulo) {
  alert("Você cancelou o programa ou digitou um valor inválido.");
} else if (!Number.isInteger(baseRetangulo)) {
  alert("Digite um número inteiro para a base");
} else {
  //Validação da entrada da altura
  let alturaRetangulo = Number(prompt("Agora, digite a altura do retangulo").replace(",","."));

  if (!alturaRetangulo) {
    alert("Você cancelou o programa ou digitou um valor nulo.");
  } else if (!Number.isInteger(alturaRetangulo)) {
    alert("Digite um número inteiro para altura");
  } else {

    //Processamento dos dados e Saída
    areaRetangulo = baseRetangulo * alturaRetangulo;
    alert(`A área do retangulo é de ${areaRetangulo}m².`);
  }
}
