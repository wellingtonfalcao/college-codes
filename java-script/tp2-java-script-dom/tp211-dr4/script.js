let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 11: Validação de Expressões Aritméticas";

/* 

Exercício 11: Validação de Expressões Aritméticas

Enunciado: Crie uma aplicação que receba uma expressão aritmética com parênteses, 
por exemplo “(23 + 4) * (67 - 9)” e informe se a mesma está bem formada ou não. 
Utilize os conceitos de pilha.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

//Variável de escopo global
let expressao;

validarExpressao()

//Validar os dados fornecidos pelo usuario
function validarExpressao(){
    expressao = prompt("Digite uma expressao aritmética para validação");
    if(expressao === null){
        alert("Programa encerrado pelo usuário");
        return 0;
    }
    if(expressao === ""){
        alert("Não é possivel inserir dado vazio");
        return validarExpressao();
    }
    //Chama a função de processamento
    processarExpressao(expressao)
}

//Função que fará o processamento da expressão
function processarExpressao(expressao) {
    // Caracteres da expressao que serão empilhados e desempilhados
    let pilha = [];

    //Verifica cada caractere dentro das respectivas condições
    for(i=0; i < expressao.length; i++){
       let caractere = expressao[i];
        // Se achar "(" signfica que foi feita uma abertura e empilha
       if(caractere === "("){
        pilha.push(caractere);
        // Se vier um ")" fecha o parametro e desempilha o "("
       } else if (caractere === ")"){
        //Retorna falso caso a pilha esteja vazia, não tem "(" de abertura.
        if (pilha.length === 0) {
            return false; 
        }
        //Desempilha caso tenha abertura e fechamento dos parenteses
        pilha.pop();
       }
}
// Se tudo foi desempilhado retorna "true", indicando que tudo confere.
return pilha.length === 0;
}

if(processarExpressao(expressao)){
    alert(`A expressão "${expressao}" está bem formada`);
} else {
    alert(`A expressão "${expressao}" não está bem formada`);
}