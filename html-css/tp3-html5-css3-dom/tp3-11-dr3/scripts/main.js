let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 11: - Formulário com Aceitação de Termos e Condições";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

11 Formulário com Aceitação de Termos e Condições

Crie no arquivo html um formulário e nele crie um título e um parágrafo, 
simulando um campo obrigatório que deve ser lido e aceito. Para isso, crie um campo de “checkbox”, 
um botão e faça com que esse form só seja enviado se o usuário marcar o checkbox, 
aceitando assim os “termos e condições”. Mostre um alerta ao usuário se puder ou não enviar o form.

*/

let formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let checkbox = document.querySelector("#termo");
    if(!checkbox.checked) {
        alert("É necessário aceitar os termos do contrato.");
    } else {
        alert("Formulário enviado com sucesso!");
        //formulario.submit();
    }
});




