let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 13: Validação de string";

/*

13 Validação de string

Enunciado: Crie uma página que use uma função para validar se uma string está em branco ou não.

Observações:

Use prompt e alert.
Teste o seu programa com cenários diferentes.

*/

function isBlank(string){
  return string.trim() === "";
}

let resultado = isBlank(prompt("Digite algo para validar"));

if(resultado){
  alert("Não deixe este campo em branco")
} else {
  alert("Campo válido")
}