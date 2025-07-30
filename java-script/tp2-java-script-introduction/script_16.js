/*
“script_16.js” → [Faça esse em grupo] - Crie uma aplicação que solicite ao usuário 
um ano com 4 dígitos e informe se aquele ano é bissexto ou não.
*/

//Caro monitor Raphael, este código fiz sozinho, infelizmente meu grupo não se manifestou.

//ENTRADA DOS DADOS
let anoUsuario = Number(
  prompt("Digite um ano com 4 dígitos, lhe direi se é bissexto.")
);

//Validar se o usuário inseriu um número válido no intervalo entre 1000 e 9999 que seja um número inteiro e não seja um caractere.
if (!Number.isInteger(anoUsuario) || anoUsuario < 1000 || anoUsuario > 9999) {
  alert("Digite um ano válido entre 1000 e 9999");
} else {
  //PROCESSAMENTO DOS DADOS
  /*Nesta condicional eu sigo a regra do calendário gregoriano. 
Todo ano divisivel por 4 e terminados em 00 sem resto ou todo ano divisivel por 400 sem restos
serão anos bissextos.
*/
  if (
    (anoUsuario % 4 === 0 && anoUsuario % 100 !== 0) ||
    anoUsuario % 400 === 0
  ) {
    //SAÍDA DOS DADOS
    alert(`O ano ${anoUsuario} é bissexto!`);
  } else {
    alert(`O ano ${anoUsuario} não é bissexto!`);
  }
}
