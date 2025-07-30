let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 8: Seleção de Números com Antecessor Par";

/* 
Exercício 8 Seleção de Números com Antecessor Par

Enunciado: Construa uma aplicação que defina um array 
[2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15] 
e gere outro array com os números que têm como antecessor um número par. 

Por exemplo: o número ‘10’, seu antecessor é ‘2’ que é par; logo, 
o número ‘10’ deve ser selecionado. Já o número ‘4’, possui ‘3’ como antecessor (ímpar), 
e, portanto, não deve ser selecionado. Ignore o primeiro número, pois este não tem antecessor.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

//OBS: Não houve necessidade de prompt pois não há entrada de dados obtidos do usuário.

//Entrada de dados
const arrayInicial = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];
let arrayResultado = [];

//Processamento
for(let i=1; i < arrayInicial.length; i++){
    if(arrayInicial[i - 1] % 2 === 0){
        arrayResultado.push(arrayInicial[i]);
        console.log(arrayResultado);
    }
}

//Saída de dados
arrayResultado = arrayResultado.join(", ")
alert(`Os números que possuem antecessor par são: ${arrayResultado}`);






