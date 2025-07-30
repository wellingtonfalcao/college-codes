let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 5: - Formulário com Mensagem de Agradecimento";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

5 Formulário com Mensagem de Agradecimento

Crie no arquivo HTML um formulário que solicite o nome e o e-mail do usuário. 
Ao enviar o formulário, exiba uma mensagem de agradecimento com as informações fornecidas em um alerta.

*/


let btEnviar = document.querySelector("#enviar");

btEnviar.addEventListener("click", () => {
  
  let errnome = document.querySelector("#errnome")
  let erremail = document.querySelector("#erremail")
  
  errnome.textContent = "";
  errnome.textContent = "";

  let valido = true;

  let nome = document.querySelector("#nome").value.trim();
  let email = document.querySelector("#email").value.trim();

  if(nome === ""){
    errnome.textContent = "Digite seu nome";
    valido = false;
  }
  
  if (!email.includes("@") || !email.includes(".")) {
    erremail.textContent = "Digite um e-mail válido";
    valido = false;
  } 
  
  if (valido){
    alert(`Agradecemos o envio de suas informações:\nNome: ${nome}\nE-mail: ${email}`)
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    errnome.textContent = "";
    erremail.textContent = "";
  }

});


