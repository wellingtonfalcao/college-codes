/*
“script_14.js” → [Faça esse em grupo] - Crie um programa que solicite ao usuário os três lados de um triângulo 
e informe se o triângulo é Equilátero, Isósceles ou Escaleno (obs: Equilátero possui todos os lados iguais, 
    Isósceles possui dois lados iguais e um diferente e Escaleno possui todos os lados diferentes).
*/

//Caro monitor Raphael, este código fiz sozinho, infelizmente meu grupo não se manifestou.

//Inicio do programa com um alert
alert(
  "Lhe pedirei os lados de um triângulo e lhe informarei se é Equilátero, Isósceles ou Escaleno."
);

//Entrada dos dados
let ladoTrianguloA = Number(prompt("Digite o primeiro lado de um triângulo"));
let ladoTrianguloB = Number(prompt("Agora o segundo lado de um triângulo"));
let ladoTrianguloC = Number(prompt("Por fim, o terceiro lado de um triângulo"));

// Processamento e validação dos dados
if (isNaN(ladoTrianguloA) || isNaN(ladoTrianguloB) || isNaN(ladoTrianguloC)) {
  alert("Caracter inválido. Digite apenas números");
} else {
  if (
    (ladoTrianguloA + ladoTrianguloB + ladoTrianguloC) / 3 ===
    ladoTrianguloA
  ) {
    alert("Este triângulo é Equilátero"); // Saída caso Equilátero
  } else if (
    ladoTrianguloA === ladoTrianguloB ||
    ladoTrianguloB === ladoTrianguloC ||
    ladoTrianguloA === ladoTrianguloC
  ) {
    alert("Este triângulo é Isósceles"); // Saída caso Isósceles
  } else {
    alert("Este triângulo é Escaleno"); // Saída caso Escaleno
  }
}
