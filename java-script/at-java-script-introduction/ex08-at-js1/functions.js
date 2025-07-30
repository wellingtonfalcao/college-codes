// Função para verificar se o ano é bissexto
function anoBissexto(anoBissexto) {
  if (!anoBissexto) {
    alert("Digite um ano válido");
  } else if (anoBissexto < 0) {
    alert("Não digite um ano menor que 0");
  } else if (anoBissexto % 1 !== 0) {
    alert("Digite um ano em valor numérico inteiro");
  } else {
    // Verifica se o ano é multiplo de 4 e 400 e exclui os múltiplos de 100.
    if (
      (anoBissexto % 4 === 0 && anoBissexto % 100 !== 0) ||
      anoBissexto % 400 === 0
    ) {
      return true;
    } else {
      return false;
    }
  }
}


// Função para verificar se o mês tem 30 dias
function mes30dias(mes30dias) {
   if(mes30dias === 4 || mes30dias === 6 || mes30dias === 9  || mes30dias === 11)
    return true;
  }

  