let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 9: - Bolão da Megasena";

//Experimentando uso de módulo para organizar as bibliotecas
import { gerarNumeros } from "./func-random.js";
import { sortNumberAsc } from "./func-ordenacao.js";
import { numeroIntervalo } from "./func-validacao.js";

/* 

Exercício 9: Bolão da Megasena

Construir uma aplicação que gere os números da Megasena para um “bolão” de amigos. 
Assegure que não vão ser gerados números repetidos. Mostre os números em ordem ascendente.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

function bolaoMegasena(){

//Entrada de dados
const numeroMin = 6;
const numeroMax = 15;

let numeroUsuario = prompt("Digite a quantidade de numeros inteiros (entre 6 e 15) que deseja gerar");
let numerosSorteados = [];

//Processamento e validação
if(numeroUsuario === null){
    alert("Programa encerrado pelo usuário");
    return 0;
}

numeroUsuario = parseInt(numeroUsuario)

if(numeroIntervalo(numeroMin, numeroMax, numeroUsuario)){
    //Chama a função em func-random.js;
    sortNumberAsc(numerosSorteados);

    //Chama a função em func-random.js;
    gerarNumeros(numeroUsuario, numerosSorteados);

    alert(`Os numeros da MegaSena para um jogo de ${numeroUsuario} números são: ${sortNumberAsc(numerosSorteados).join(" | ")}`);

} else {
    
    alert(`Digite um valor inteiro entre 6 e 15.`);
    return bolaoMegasena();

}

}

bolaoMegasena();




