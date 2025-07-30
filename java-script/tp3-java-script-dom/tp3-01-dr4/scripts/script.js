let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 1: Grupo - Sintaxe de Funções";

/* 

Exercício 1: Sintaxe de Funções

Enunciado: Crie uma aplicação que implemente uma biblioteca de funções 
de validação de strings com 2 funções: minLength e maxLength. 
Crie um script para testar cada uma das funções, 
solicitando ao usuário que digite valores para serem testados. 

Observações:

Utilize prompt e alert.
Implemente minLength usando a sintaxe de declaração de função.
Implemente maxLength usando a sintaxe de função de seta.

*/

function solicitarPalavra(){
    let palavraUsuario = prompt("Digite uma palavra entre 5 e 10 caracteres.");
    if(palavraUsuario === null){
        return 0;
    }
    if(minLength(palavraUsuario, 5) && maxLength(palavraUsuario, 10)){
        alert("Validado!");
    } else {
        alert("Digite um valor entre 5 e 10 carateres");
        return solicitarPalavra();
    }
}

solicitarPalavra();
 