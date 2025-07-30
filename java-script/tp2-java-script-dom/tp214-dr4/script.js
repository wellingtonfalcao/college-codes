let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 14: Grupo - Arrow function";

/*

Exercício 14: Grupo - Arrow function

No arquivo script.js, siga as etapas abaixo:

Crie uma função de seta (arrow function), para calcular a soma
entre três valores, informados pelo usuário através do prompt.
Chame esta função e exiba o resultado.

*/

let numeros = [];

for(let i=0; numeros.length < 3; i++){
    numeros.push(prompt(`Digite o ${i + 1}º número.`));
    if(numeros[i] === null){
        alert("Programa encerrado pelo usuário");
        break;
    }else if(isNaN(numeros[i]) || numeros[i] === ""){
        alert("Digite um número válido");
        i = -1;
        numeros = [];
    }else{
        numeros[i] = Number(numeros[i]);
    }
}

const funcaoSeta = (num1, num2, num3) => {
    let soma;
    return soma = num1 + num2 + num3
}

if (numeros.length === 3) {
    alert(`A soma dos números é ${funcaoSeta(...numeros)}`);
}



