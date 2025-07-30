/*
----------------------------------------------------------------
Exercicio 3 - Calculadora Simples
----------------------------------------------------------------

- Use o prompt para obter um número.
- Em seguida use outro prompt para obter uma operação aritmética.
- Em seguida use outro prompt para obter um outro número.
- Exiba o resultado em um alert.

*/

// Entrada de dados
alert("Calculadora Simples, siga atentamente as operações a seguir:")

// Entrada das variaveis
const primeiroOperando = Number(prompt("Digite o primero valor/operando"));
const operadorAritmetico = prompt('Digite "+" para soma, "-" para subtração, "*" para multiplicação ou "/ para divisão."');
const segundoOperando = Number(prompt("Digite o segundo valor/operando"));
let operacao;

// Não deixar processar caso retorne falso
let validador = true;

//Validação dos operandos
if (isNaN(primeiroOperando)) {
    alert("Primeiro valor: Digite um valor numérico válido");
    validador = false;
} else if (isNaN(segundoOperando)) {
    alert("Segundo valor: Digite um valor numérico válido");
    validador = false;
}

// Switch case para processar a operação de acordo com o operador.
if (validador) {
    switch (operadorAritmetico) {
        case "+": operacao = primeiroOperando + segundoOperando;
        alert(`O resultado da soma de ${primeiroOperando} por ${segundoOperando} é ${operacao}.`);
        break;
    
        case "-": operacao = primeiroOperando - segundoOperando;
        alert(`O resultado da subtração de ${primeiroOperando} por ${segundoOperando} é ${operacao}.`);
        break;
    
        case "*": operacao = primeiroOperando * segundoOperando;
        alert(`O resultado da multiplicação de ${primeiroOperando} por ${segundoOperando} é ${operacao}.`);
        break;
    
        case "/": operacao = primeiroOperando / segundoOperando;
        alert(`O resultado da divisão de ${primeiroOperando} por ${segundoOperando} é ${operacao}.`);
        break;
    
        default:
            alert(`"${operadorAritmetico}" é um operador aritmético inválido.`);  
    }
}
