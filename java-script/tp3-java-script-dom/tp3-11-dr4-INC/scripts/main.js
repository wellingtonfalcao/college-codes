let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 11: - Jogo de Palavras - Versão 2";

//import { gerarNumeros } from "./func-random.js";
//import { sortNumberAsc } from "./func-ordenacao.js";
//import { numeroIntervalo } from "./func-validacao.js";
//import { numeroIntervalo } from "./func-produtos.js";

/* 

Exercício 11 Jogo de Palavras - Versão 2

Crie uma nova aplicação aproveitando o que fez na questão anterior,
mas que agora carregue o array de palavras com os municípios de uma 
UF da sua escolha.

Observações:

Utilize a API do IBGE para acessar os municípios. Por exemplo, 
esta é a URL da UF Rio de Janeiro: 
https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios

*/
const cidades = [];

async function carregarMunicipios() {
    try {
        //Aguardar recebimento dos dados do JSON
        const response = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios");
        const municipios = await response.json();
        municipios.forEach(municipio => cidades.push(municipio.nome));// Inserir a propriedade nome dentro do array cidades.
    } catch (error) {
        console.error('Erro ao buscar os dados:', error); // caso ocorra um erro exibe no console.
    } 
}

carregarMunicipios();
console.log(cidades)

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
    let cidadesSort = [...cidades];
    cidadesSort.sort(() => Math.random() - 0.5);

    //Pego o último autor para validar depois
    validar = cidadesSort[cidadesSort.length - 1];
    
    //Embaralhar os caracteres do nome do autor
    cidadesSort.forEach((item) => {
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
