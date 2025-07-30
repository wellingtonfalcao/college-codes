/* 
“script_03.js” → Crie um programa que solicite um número maior que zero e 
calcule o seu quadrado, seu cubo e sua raiz quadrada, exibindo o resultado.
 */

//Entrada dos dados
let numeroMaiorZero = Number(
  prompt(
    "Me informe um número maior que 0. \nInformarei sua raiz quadrada, seu quadrado e seu cubo."
  )
);
//Processamento de dados
let numeroAoQuadrado = numeroMaiorZero ** 2;
let numeroAoCubo = numeroMaiorZero ** 3;
let numeroRaizQuadrada = Math.sqrt(numeroMaiorZero).toFixed(2);

//Saída de dados com condicional
if (numeroMaiorZero > 0) {
  alert(
    `O número ${numeroMaiorZero} tem como valor: \nAo quadrado: ${numeroAoQuadrado}\nAo cubo: ${numeroAoCubo}\nRaiz quadrada: ${numeroRaizQuadrada}`
  );
} else {
  alert("Digite um número maior que zero");
}
