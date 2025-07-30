/*
----------------------------------------------------------------
Exercicio 11 - Bissexto  
----------------------------------------------------------------

Crie um sistema que solicite um ano por prompt e informe se o ano é bissexto ou não.

*/

//Entrada do valor 
let anoBissexto = parseInt(prompt("Informe um ano e lhe respondo se é bissexto"));

//Validação se o valor é de um ano 
if (!anoBissexto) {
    alert("Digite um ano válido");
} else if (anoBissexto < 0){
    alert("Não digite um ano menor que 0");
} else {
    // Verifica se o ano é multiplo de 4 e 400 e exclui os múltiplos de 100. 
    if ((anoBissexto % 4 === 0  && anoBissexto % 100 !== 0) || (anoBissexto % 400 === 0)) {
        alert(`${anoBissexto} é bissexto`);
    } else {
        alert(`${anoBissexto} não é bissexto`);
    }
}




