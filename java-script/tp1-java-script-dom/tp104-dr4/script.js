/*

Exercício 4: Combinação e exclusão de elementos de arrays.

Execute os passos definidos abaixo:

    Crie um array com os itens: "Mercúrio", "Vênus", "Terra", “Marte” e “Júpiter”. 
    Crie um outro array com os itens: “Saturno”, “Urano” e “Netuno”.
    Junte os dois arrays em um terceiro.
    Exiba o array resultante com alert.
    Exclua o primeiro e o último elemento deste novo array.
    Exiba o array resultante com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.


*/

let planetas1 = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter"];
let planetas2 = ["Saturno", "Urano", "Netuno"];

//Usando o metodo concat para juntar os arrays
let totalPlanetas = planetas1.concat(planetas2);

alert(totalPlanetas);

//Remove o ítem no primeiro índice do array
totalPlanetas.shift();

//Remove o item no ultimo indice do array
totalPlanetas.pop();

alert(totalPlanetas);
