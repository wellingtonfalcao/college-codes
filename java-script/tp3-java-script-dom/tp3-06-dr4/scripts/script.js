let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 6: - Contador de Vogais";

/* 
Exercício 6: Contador de Vogais

Crie uma aplicação que contenha uma função que receba 
uma string como parâmetro e retorne quantas vogais existem.

Observações:

Utilize prompt e alert.
*/

let palavra = prompt("Digite uma frase e lhe retorno quantas vogais possui");

function quantidadeVogais(string){
    //Usei regex para pegar todas as vogais incluindo as com acentuação.
    let vogais = string.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
    
    //Retorno zero caso não tenha vogal, senão retorna null.
    if(!vogais){
        return 0;
    }
    
    return vogais.length;
}

alert(`A frase que digitou: "${palavra}" contém ${quantidadeVogais(palavra)} vogais`);