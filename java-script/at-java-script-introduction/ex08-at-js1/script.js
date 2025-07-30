/*
----------------------------------------------------------------
Exercicio 8 - Datas em portugues    
----------------------------------------------------------------

Crie uma aplicação que obtenha o dia, mês e o ano de uma data com prompt e informe:
- O dia da semana em português.
- O mês do ano em português.

*/

// Entrada de dados
let dia = parseInt(prompt("Digite um dia do mês desejado"));
let mes = parseInt(prompt("Agora digite o número do mês"));
let ano = parseInt(prompt("Por fim, digite o ano"));

/* Processamento dos dados e validações se: 
- O dia de mês tem 31 ou 30 dias, se o ano é bissexto, se ano ano é de antes de 1970.
- Se o usuário cancelou ou anulou o que digitou, se o mes está fora do intervalo 1 e 12.
*/
if (!dia || dia < 1 || dia > 31) {
  alert("Digite um dia válido");
} else if (mes === 2 && dia > 29 && anoBissexto(ano) === true) {
  alert(`Não há dia ${dia} para o ano de ${ano}, Mês de Fevereiro de ano bissexto tem 29 dias.`);
} else if (mes === 2 && dia > 28 && anoBissexto(ano) === false) {
  alert(`Não há dia ${dia} para o ano de ${ano}, ele não é bissexto e Fevereiro só tem 28 dias.`);
} else if (dia > 30 && mes30dias(mes)) {
  alert("Este mês só tem 30 dias");
} else if (!mes || mes < 1 || mes > 12) {
  alert("Digite um mês válido");
} else if (!ano || ano < 0 || ano < 1970) {
  alert("Digite um ano válido acima de 1970");
} else {
  let dataCompleta = new Date(ano, mes - 1, dia);// Objeto de data corringo o mês com -1 para considerar o 0 do Date();
  let diaDasemana;
  let mesString;

  switch (dataCompleta.getDay()) {
    case 0:
      diaDasemana = "Domingo";
      break;
    case 1:
      diaDasemana = "Segunda-feira";
      break;
    case 2:
      diaDasemana = "Terça-feira";
      break;
    case 3:
      diaDasemana = "Quarta-feira";
      break;
    case 4:
      diaDasemana = "Quinta-feira";
      break;
    case 5:
      diaDasemana = "Sexta-feira";
      break;
    case 6:
      diaDasemana = "Sábado";
  }

  switch (dataCompleta.getMonth()) {
    case 0:
      mesString = "Janeiro";
      break;
    case 1:
      mesString = "Fevereiro";
      break;
    case 2:
      mesString = "Março";
      break;
    case 3:
      mesString = "Abril";
      break;
    case 4:
      mesString = "Maio";
      break;
    case 5:
      mesString = "Junho";
      break;
    case 6:
      mesString = "Julho";
      break;
    case 7:
      mesString = "Agosto";
      break;
    case 8:
      mesString = "Setembro";
      break;
    case 9:
      mesString = "Outubro";
      break;
    case 10:
      mesString = "Novembro";
      break;
    case 11:
      mesString = "Dezembro";
      break;
  }
  // Saída do valor processado para um alert com a data inserida e qual dia da semana e qual mês em portugues.
  alert(`A data ${dia}/${mes}/${ano} é um(a) ${diaDasemana} de ${mesString}.`);
}
