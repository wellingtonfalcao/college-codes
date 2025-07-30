/*
“script_15.js” → [Faça esse em grupo] - Crie um programa que peça que o usuário escolha entre Pedra, Papel ou Tesoura (pode ser uma entrada numérica = 1, 2 ou 3). 
O programa deve escolher uma dessas opções aleatoriamente e em seguida deve informar para o usuário qual foi a escolha sorteada pelo programa e se ele ganhou ou não do programa.
*/

//Caro monitor Raphael, este código fiz sozinho, infelizmente meu grupo não se manifestou. Tive bastante trabalho com este exercício.

// Solicitar ao usuário um número correspondente ao gesto da mão
let escolhaUsuario = Number(
  prompt(`Vamos jogar pedra, papel e tesoura? Sendo:

1 - Pedra
2 - Papel
3 - Tesoura

Digite apenas o número correspondente. Boa sorte!
`)
);

// Declaração das variáveis inciais
let pedra = 1;
let papel = 2;
let tesoura = 3;

//Sortear um número entre 1 e 3
let escolhaRandomica = Math.ceil(Math.random() * (tesoura - pedra + pedra)); // Usei Math.ceil para que o número aleatório não considere 0, poderia colocar "* 3" mas não quis perder a lógica;

/*Substituição da escolha numérica do usuario por string, além de validar se o usuario digitou 
um número decimal, um número igual ou inferior a 0 ou um numero maior que 3 */
if (
  !Number.isInteger(escolhaUsuario) ||
  escolhaUsuario <= 0 ||
  escolhaUsuario > 3
) {
  alert(
    "Valor inválido! Digite (1) para pedra, (2) para papel ou (3) para tesoura."
  );
} else {
  if (escolhaUsuario === 1) {
    escolhaUsuario = "pedra";
  } else if (escolhaUsuario === 2) {
    escolhaUsuario = "papel";
  } else if (escolhaUsuario === 3) {
    escolhaUsuario = "tesoura";
  }

  //Substituição do número da escolha randomica por string
  if (escolhaRandomica === 1) {
    escolhaRandomica = "pedra";
  } else if (escolhaRandomica === 2) {
    escolhaRandomica = "papel";
  } else {
    escolhaRandomica = "tesoura";
  }

  // Processamento dos dados e aplicação da regra
  const respostaJogo = `Você jogou ${escolhaUsuario} e seu oponente jogou ${escolhaRandomica}`; // defini uma constante para não precisar repetir a resposta

  if (escolhaUsuario === escolhaRandomica) {
    alert(`Empate! ${respostaJogo}`); // Elimino primeiro caso haja empate
  } else if (
    (escolhaUsuario === "pedra" && escolhaRandomica === "papel") ||
    (escolhaUsuario === "papel" && escolhaRandomica === "tesoura") ||
    (escolhaUsuario === "tesoura" && escolhaRandomica === "pedra")
  ) {
    alert(`Você perdeu! ${respostaJogo}`); // Faço a lógica em cima das 3 escolhas possíveis do usuário onde ele vença
  } else {
    alert(`Você ganhou! ${respostaJogo}`); // Eliminado empates e vitórias, o resto possível e o usuário perder
  }
}
