/* “script_01.js” → Crie um programa que solicite dois números maiores 
que zero e exiba a divisão de um pelo outro e o resto da divisão de 
um pelo outro em uma única mensagem.  */

// Colocar uma validação para caso o usuario digite uma letra
// Colocar uma validçaão para caso o usuario aperte cancelar

//Entrada
let numeroUm = Number(prompt("Olá, Me informe um número maior que 0"));
let numeroDois = Number(prompt("Agora, mais um número maior que 0"));
if (numeroUm > 0 && numeroDois > 0) {
  // Validar a entrada de dados (se são maiores que 0)
  //Processamento
  let divisaoNumeros = numeroUm / numeroDois;
  let restoDivisao = numeroUm % numeroDois;

  //Saída
  alert(
    `O resultado da divisão de ${numeroUm} por ${numeroDois} é ${Math.floor(
      divisaoNumeros
    )} e o resto é ${restoDivisao}.`
  );
} else {
  alert(`O número precisa ser maior que 0`);
}
