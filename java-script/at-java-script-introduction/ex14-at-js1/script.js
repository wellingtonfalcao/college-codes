/*
----------------------------------------------------------------
Exercicio 14 - Data futura    
----------------------------------------------------------------
Desenvolva uma aplicação que solicite dia, mês e ano via prompts 
separados de uma data futura e mostre quantos dias, horas e minutos 
faltam para chegar.

*/

// Entrada de dados
alert(`CALCULADORA DE DATA FUTURA
Informe uma data futura para saber quantos dias, horas e minutos faltam.`);

//Entrada das variáveis
let dia = parseInt(prompt("Digite o dia do mês desejado"));
let mes = parseInt(prompt("Agora o numero do mês (Ex. 6 para Junho)"));
let ano = parseInt(prompt("Por fim, o ano (Ex. 2024)"));

//Processamento dos dados e validações se:
//O dia tem 31 ou 30 dias, se o ano é bissexto, se ano ano é de antes de 1970,
//Se o usuário cancelou ou anulou o que digitou, se o mes está fora do intervalo 1 e 12.
if (!dia || dia < 1 || dia > 31) {
  alert("Digite um dia válido");
} else if (mes === 2 && dia > 29 && anoBissexto(ano)) {
  alert(`Não há dia ${dia} para o ano de ${ano} no mês de Fevereiro. 
Ano bissexto tem 29 dias.`
);
} else if (mes === 2 && dia > 28 && anoBissexto(ano) === false) {
  alert(
    `Não há dia ${dia} para o ano de ${ano}, ele não é bissexto e Fevereiro só tem 28 dias.`
  );
} else if (dia > 30 && mes30dias(mes)) {
  alert("Este mês só tem 30 dias");
} else if (!mes || mes < 1 || mes > 12) {
  alert("Digite um mês válido");
} else {

  // Objeto de data corringo o mês com -1 para considerar o 0 do Date();
  let dataFutura = new Date(ano, mes - 1, dia);
  //Obtem a data de hoje 
  let dataAtual = new Date(); 

  // Processamento de subtração da data futura menos a data atual e converte de millisegundos para dias e arrendoda pra cima.
  let dataRestanteDias = Math.floor(
    (dataFutura - dataAtual) / (1000 * 60 * 60 * 24)
  );
  let dataRestanteHoras = Math.floor(
    ((dataFutura - dataAtual) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let dataRestanteMinutos = Math.ceil(
    ((dataFutura - dataAtual) % (1000 * 60 * 60)) / (1000 * 60)
  );

  // Validação final se a data é hoje ou se é uma data que já passou
  if (dataRestanteDias < 0) {
    alert("Digite uma data futura");
  } else if (dataRestanteDias === 0) {
    alert("Digite uma data futura que não seja a de hoje");
  } else {
    alert(
      `Falta ${dataRestanteDias} dia(s), ${dataRestanteHoras} horas e ${dataRestanteMinutos} minutos para a data ${dia}/${mes}/${ano}.`
    );
  }
}
