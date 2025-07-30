/*

DR2-TP1.14

Crie um programa que realize o cálculo da força (Lei de Newton) e da potência. A fórmula da força é:
F = m.ac

Onde: F é a força, m é a massa do objeto e ac é a aceleração.

A fórmula da potência é:
P = W/t

Onde: P é a potência, W é o trabalho realizado e t é o tempo.

Para isto:

Solicite os valores utilizados nas fórmulas ao usuário com prompt.
Exiba em um alerta o resultado de cada fórmula.

*/

// Formula de Newton -------------------------------------------------------------------------------

//Entrada de dados

let valorMassaObjeto = Number(
  prompt(
    "Vamos calcular a força em Newtons. Me informe o valor de massa do objeto"
  )
);
let resultadoAceleracaoObjeto = Number(
  prompt(
    "Agora informa o valor de aceleração do objeto em metros por segundo (m/s) )"
  )
);

//Processamento

let forcaObjeto = valorMassaObjeto * resultadoAceleracaoObjeto;

alert("A força do objeto é de " + forcaObjeto + " n (newtons)");

// Formula de potência -----------------------------------------------------------------------------

//Entrada de dados

let valorTrabalho = Number(
  prompt(
    "Vamos fazer um calculo de potência. Digite o valor do trabalho e a ser realizado"
  )
);
let valorTempo = Number(
  prompt("Agora informe o tempo necessário para este trabalho")
);

//Processamento

let resultadoPotenciaObjeto = valorTrabalho / valorTempo;

alert("A potência do objeto é de " + resultadoPotenciaObjeto + "W (Watts)");
