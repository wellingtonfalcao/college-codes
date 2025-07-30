/* 
DR2-TP1.7

Vamos a um desafio! Crie um programa que realize os seguintes passos:

- Solicite um número com prompt, e guarde o que foi digitado em uma variável “primeiroNumero”.
- Solicite um segundo número via prompt, e guarde o que foi digitado em uma variável “segundoNumero”.
- Mostre o resultado de cada uma das quatro operações principais no console, no formato “operação: resultado”, 
onde operação é a operação utilizada e resultado é o resultado da operação. 
As operações que devem ser feitas são "adição", "subtração", "multiplicação" e "divisão".

Observação:

- É necessário converter os números digitados no prompt para o tipo number, ou as operações matemáticas não vão funcionar corretamente. Exemplo:
- let primeiroNumero = prompt("Digite o primeiro número:").
- let primeiroNumeroConvertido = Number(primeiroNumero).

*/

let primeiroNumero = Number(prompt("Digite um número"));
let segundoNumero = Number(prompt("Agora digite um número"));

console.log(
  "O resultado da soma de " +
    primeiroNumero +
    " + " +
    segundoNumero +
    " é " +
    (primeiroNumero + segundoNumero)
);

//Processamento da subtração
console.log(
  "O resultado da subtração de " +
    primeiroNumero +
    " - " +
    segundoNumero +
    " é " +
    (primeiroNumero - segundoNumero)
);

//Processamento da multiplicação
console.log(
  "O resultado da multiplicação de " +
    primeiroNumero +
    " * " +
    segundoNumero +
    " é " +
    primeiroNumero * segundoNumero
);

//Processamento da divisão
console.log(
  "O resultado da divisão de " +
    primeiroNumero +
    " / " +
    segundoNumero +
    " é " +
    primeiroNumero / segundoNumero
);
