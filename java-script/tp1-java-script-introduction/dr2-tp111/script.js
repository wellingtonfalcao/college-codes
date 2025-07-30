/*

DR2-TP1.11

Crie um programa que realize o cálculo da velocidade média. A fórmula é:

Vm = dist/t

Onde: Vm é a velocidade média, dist é à distância percorrida e t é o tempo.

Para isto:

- Solicite os valores utilizados na fórmula ao usuário com prompt.
- Exiba em um alerta o resultado da aplicação da fórmula.

*/

let distanciaPercurso = Number(
  prompt("Digite a distância total do percurso em metros")
);
let tempoPercurso = Number(
  prompt("Agora, digite o tempo total do percurso em segundos")
);

let velocidadeMedia = distanciaPercurso / tempoPercurso;

alert("A velocidade média é de: " + velocidadeMedia + " m/s");
