let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 6: Soma e Multiplicação de Números";

/* 

Exercício 6: Soma e Multiplicação de Números

Enunciado: Construa uma aplicação que solicite que o usuário informe 
um número inteiro entre 3 e 10 e, usando while, informe a soma e a 
multiplicação dos números entre 1 e o número que foi informado. 
Apresente somente uma mensagem.

Observações:

Valide sempre as entradas de dados.
Utilize prompt, alert e while.
Teste o seu código.

*/

//Iniciar a aplicação
main();

function main () {

let numUsuario = "";
let operando = 1;
let soma = "";
let multiplicacao = [];
let totalSoma = [];
let totalMultiplicacao = [];

validarNumero();

//Entrada dos dados do usuário - processo de validação
function validarNumero() {
    numUsuario = prompt("Digite um número inteiro entre 3 e 10");
    if(numUsuario === null){
        alert("Programa encerrado pelo usuário");
        return 0;
    } else if(isNaN(numUsuario) || !numUsuario) {
        console.log(numUsuario);
        alert("Digite um número inteiro válido");
        return validarNumero();
    } else if(numUsuario < 3 || numUsuario > 10){
        alert(`Você digitou ${numUsuario}. Digite um número entre 3 e 10`);
        return validarNumero();
    }
    numUsuario = Number(numUsuario); 
    processarNumero();
}

//Processamento dos dados validados
function processarNumero() {
    
    while(operando < numUsuario){
        //Operação de Soma
        soma = numUsuario + operando;
        totalSoma.push(`${numUsuario} + ${operando} = ${soma}`);

        //Operação de Multiplicação
        multiplicacao = numUsuario * operando;
        totalMultiplicacao.push(`${numUsuario} * ${operando} = ${multiplicacao}`);
        operando++;
    }

    //Saída de dados
    alert(`O total das somas é:\n${totalSoma.join("  |  ")}.\n\nO total das multiplicacoes é:\n${totalMultiplicacao.join("  |  ")}.`);

}
    
}


