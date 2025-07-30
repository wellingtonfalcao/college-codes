let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 13: Grupo - Sorteio de números para o usuário";

/*

Exercício 13: Grupo - Sorteio de números para o usuário

No arquivo script.js, siga as etapas abaixo:

Pergunte ao usuário quantos números ele deseja sortear.
Sorteie a quantidade de números informados pelo usuário.
Obs:

Utilize uma estrutura de repetição (while ou for).
Utilize Math.random com Math.ceil para gerar os números aleatórios.
Utilize console.log para exibir os números ao usuário.
Utilize prompt para perguntar ao usuário.
Os números sorteados devem ser aleatórios, entre 1 e 60.

*/

/*
Exercício 13: Grupo - Sorteio de números para o usuário

No arquivo script.js, siga as etapas abaixo:

Pergunte ao usuário quantos números ele deseja sortear.
Sorteie a quantidade de números informados pelo usuário.
Obs:

Utilize uma estrutura de repetição (while ou for).
Utilize Math.random com Math.ceil para gerar os números aleatórios.
Utilize console.log para exibir os números ao usuário.
Utilize prompt para perguntar ao usuário.
Os números sorteados devem ser aleatórios, entre 1 e 60.
*/

// Iniciar programa
sortearLoteria();

function sortearLoteria() {
    // Variáveis da função
    let numerosSorteados = [];
    let totalNumeros = validacao();

    // Entrada de dados
    function validacao() {
        let totalNumeros = prompt("Insira uma quantidade de números a serem sorteados (Entre 1 e 10):");
        
        if (totalNumeros === null) {
            alert("Programa encerrado pelo usuário");
            return false;
        }
        
        if (totalNumeros === "") {
            alert("Você precisa digitar um valor com número inteiro.");
            return validacao();
        }

        totalNumeros = parseInt(totalNumeros);

        if (!Number.isInteger(totalNumeros)) {
            alert("Você precisa digitar um valor com número inteiro.");
            return validacao();
        }
        
        if (totalNumeros <= 0 || totalNumeros > 10) {
            alert("Digite um valor entre 1 e 10.");
            return validacao();
        }

        return totalNumeros;
    }

    // Processamento do valor validado
    function processamento(totalNumeros) {
        if (!totalNumeros) {
            return false;
        }

        while (numerosSorteados.length < totalNumeros) {
            let numeroProcessado = Math.ceil(Math.random() * 60); // Números entre 1 e 60
            let flag = numerosSorteados.find((numero) => numero === numeroProcessado);

            if (flag === undefined) {
                numerosSorteados.push(numeroProcessado);
            }
        }

        console.log(`Os números sorteados são:\n ${numerosSorteados.join(" | ")}`);
    }

    processamento(totalNumeros);
}