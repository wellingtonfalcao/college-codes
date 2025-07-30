let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 6: - Formulário Estilizado com Validação de Campos Obrigatórios";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

6 Formulário Estilizado com Validação de Campos Obrigatórios

Crie um arquivo HTML que contenha um formulário estilizado com CSS. 
O formulário deve ter campos para nome, e-mail e uma mensagem. 
Estilize os campos para que tenham bordas arredondadas e mudem de cor ao receber foco, 
faça também a validação de todos os campos do formulário, fazendo-os obrigatórios para o envio.

*/

// Não consegui remover o outline de forma alguma.

let btEnviar = document.querySelector("#enviar");

btEnviar.addEventListener("click", () => {
  
  let errnome = document.querySelector("#errnome");
  let erremail = document.querySelector("#erremail");
  let errmensagem = document.querySelector("#errmensagem");
  
  errnome.textContent = "";
  erremail.textContent = "";
  errmensagem.textContent = "";

  let valido = true;

  let nome = document.querySelector("#nome").value.trim();
  let email = document.querySelector("#email").value.trim();
  let mensagem = document.querySelector("#mensagem").value.trim();

  if(nome === ""){
    errnome.textContent = "Digite seu nome";
    valido = false;
  }
  
  if (!email.includes("@") || !email.includes(".")) {
    erremail.textContent = "Digite um e-mail válido";
    valido = false;
  } 

  if(mensagem === ""){
    errmensagem.textContent = "Digite uma mensagem";
    valido = false;
  }
  
  if (valido){
    alert(`Agradecemos o envio de suas informações:\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`)
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mensagem").value = "";
    errnome.textContent = "";
    erremail.textContent = "";
    errmensagem.textContent = "";
  }

});


