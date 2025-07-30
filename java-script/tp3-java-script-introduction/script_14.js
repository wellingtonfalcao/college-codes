// No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário 4 valores: X, A, B e C, onde X é um número inteiro e positivo e A, B e C são quaisquer valores reais.
// O programa deve escrever os valores lidos e:
// Se x=1, escreva os três valores A, Be C em ordem crescente.
// Se x=2, escreva os três valores A, B e C em ordem decrescente.
// Se x=3, escreva os três valores A, B e C de forma que o maior fique entre os outros dois.
// Caso contrário, exiba uma mensagem indicando que o valor de x não corresponde a nenhuma das condições acima.

//Entrada de dados
let valorA = Number(prompt("Digite um primeiro valor"));
let valorB = Number(prompt("Digite um segundo valor"));
let valorC = Number(prompt("Digite um terceiro valor"));

// Processo de validação da entrada dos dados
if (isNaN(valorA) || isNaN(valorB) || isNaN(valorC)) {
  alert("Digite apenas números reais");

// Processamento dos dados, verificando tamanho do número item por item
} else {
  if (valorA > valorB) {
    let temp = valorA;
    valorA = valorB;
    valorB = temp;
  }

  if (valorA > valorC) {
    let temp = valorA;
    valorA = valorC;
    valorC = temp;
  }

  if (valorB > valorC) {
    let temp = valorB;
    valorB = valorC;
    valorC = temp;
  }

  // Saída de dados: Comutação da ordenção de acordo com a opção selecionada
  let valorX = Number(prompt("Digite (1) para ordem crescente, (2) para decrescente, (3) o maior no meio"));

  switch (valorX) {
    case 1:
      alert(`Ordem Crescente: ${valorA}, ${valorB}, ${valorC}`);
      break;
    case 2:
      alert(`Ordem Decrescente: ${valorC}, ${valorB}, ${valorA}`);
      break;
    case 3:
      alert(`Maior no centro: ${valorA}, ${valorC}, ${valorB}`);
      break;
    default:
      alert(`Digite um valor válido entre 1 e 3.`);
      break;
  }
}
