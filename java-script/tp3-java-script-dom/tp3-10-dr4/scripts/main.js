let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 10: - Jogo de Palavras - Versão 1";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

Exercício 10 Jogo de Palavras - Versão 1

Construir uma aplicação web com o layout definido abaixo.
https://lms.infnet.edu.br/moodle/pluginfile.php/1135499/mod_assign/intro/unnamed%20%2830%29.png
 
Defina um array com 10 nomes de escritores para escolher um escritor aleatório, 
exibindo seu nome com as letras embaralhadas para o usuário tentar adivinhar.

Observações:

Utilize HTML para construção da tela.

*/

const escritores = [
    "Machado de Assis",
    "Clarice Lispector",
    "Carlos Drummond de Andrade",
    "Monteiro Lobato",
    "Cecília Meireles",
    "Graciliano Ramos",
    "Jorge Amado",
    "Rachel de Queiroz",
    "Lima Barreto",
    "Guimarães Rosa"
];

//Constantes que obtem itens do HTML
const btJogar = document.querySelector("#bt-jogar");
const resultado = document.querySelector("#resultado");
const inputValidar = document.querySelector("#input-validar");
const btValidar = document.querySelector("#bt-validar");

//Variaveis globais para armazenamento
let exibirResultado = document.querySelector("#exibir-resultado");
let validar;


//Evento com função de de processar o array 
btJogar.addEventListener("click", () => {
    
    //Faz cópia do array para embaralhar o índice dos autores
    let escritoresSort = [...escritores];
    escritoresSort.sort(() => Math.random() - 0.5);

    //Pego o último autor para validar depois
    validar = escritoresSort[escritoresSort.length - 1];
    
    //Embaralhar os caracteres do nome do autor
    escritoresSort.forEach((item) => {
        let letras = item.split("");
        letras.sort(() => Math.random() - 0.5);
        resultado.textContent = letras.join("");
    } )
    exibirResultado.textContent = "";
});


//Evento com função de validação
btValidar.addEventListener("click", () => {
    let valor = inputValidar.value;
    valor = valor.trim(); 

    if(validar === valor){
    exibirResultado.style.color = "green"
    exibirResultado.textContent = "Parabéns! Você acertou.";
   } else {
    exibirResultado.style.color = "red";
    exibirResultado.textContent = "Que pena, você errou. Tente novamente.";
   }
   
   valor = inputValidar.value = ""; //Limpar o input no final do programa
});
