/*

DR2-TP1.13

Crie um programa que receba um número digitado pelo usuário e exiba a quantidade equivalente de horas e minutos.

Ex: 131 equivalem a 2 horas e 11 minutos.

*/

//Entrada de dados
let minutosTotais = Number(
  prompt("Digite um número em minutos, lhe retornarei as horas.")
);

// Processamento
horas = Math.floor(minutosTotais / 60); // Pegamos apenas o resultado inteiro da divisao dos minutos totais por hora (60 minutos)
minutos = minutosTotais % 60; // Coletamos o resto da divisão dos minutos totais pela hora;

//Saída
alert(
  minutosTotais +
    " minutos" +
    " equivalem a " +
    horas +
    " horas e " +
    minutos +
    " segundos"
);
