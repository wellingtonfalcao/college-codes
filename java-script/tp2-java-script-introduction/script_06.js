/*
“script_06.js” → Crie um programa que receba o valor 
da altura e do peso de uma pessoa e retorne o seu IMC - 
Índice de Massa Corporal. 
*/

//Entrada dos dados
let altura = Number(
  prompt("Me informe sua altura em metros, apenas números(Ex.: 1.84)")
);

if (altura <= 0 || altura > 4 || Number.isNaN(altura)) {
  alert("Sua altura deve ser representada com números e acima de 0");
} else {
  let peso = Number(prompt("Me informa agora seu peso em kilos (Ex.: 84)"));
  if (peso <= 0 || Number.isNaN(peso)) {
    alert("Seu peso deve ser representado com números e acima de 0");
  } else {
    let imc = peso / altura ** 2;
    alert(`Seu IMC é de ${imc.toFixed(0)}`);
  }
}
