let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 6: Série Fibonacci";

import { fibonacci } from "./funcoes.js";

/*

6 Série Fibonacci

Enunciado: Crie uma página com um programa JavaScript que solicite um valor inteiro positivo 
e gere um array com a série Fibonacci dos números menores ou iguais ao número informado.

Observações:

Use input para obter o número.
Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.
Não use recursividade nesta questão.
Dispare um erro caso o valor informado não seja válido. Use throw e o erro mais adequado ao tipo de problema encontrado.
Teste o seu programa com cenários diferentes.

Considerações:
Serão usados como teste os números 4181 e 6765.

*/

const numeroUsuario = document.getElementById("input");
const botao = document.getElementById("botao");
const resposta = document.getElementById("resposta");

botao.addEventListener("click", () => {

    let valor = numeroUsuario.value.trim().replace(",",".");

    try {

        if (!Number.isInteger(Number(valor))){
            throw new Error("O valor precisa ser um número inteiro");
        }
        
        if(isNaN(valor)){
            throw new Error("O valor precisa ser um número");
        }

        if(!valor){
            throw new Error("Digite um valor válido");
        }

        if(valor < 0){
            throw new Error("Digite um valor inteiro positivo");
        }

        valor = parseInt(valor);
        let i = 1;
            
        while(fibonacci(i)[fibonacci(i).length - 1] <= valor){
            i++;
        }

        let enesimoFibonacci = fibonacci(i)[fibonacci(i).length - 2];

        if(valor === enesimoFibonacci){
            resposta.innerHTML = `O "${valor}" é o ${(i - 1)}º da sequencia de Fibonacci.<br>`;
            resposta.innerHTML += `O array é: ${fibonacci(i - 1).join(", ")}.`;
        } else {
            resposta.innerHTML = `O "${valor}" tem como número menor mais próximo "${enesimoFibonacci}".
            O ${(i - 1)}º da sequencia de Fibonacci.<br>`;
            resposta.innerHTML += `O array é: ${fibonacci(i - 1).join(", ")}.`;
        }

    } catch (erro) {
        resposta.innerHTML = `${erro.message}`;
    }
    
});
    
  









