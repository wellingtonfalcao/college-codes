let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 5: Separação de Números Pares e Ímpares";

/* 

Exercício 5: Separação de Números Pares e Ímpares

Enunciado: Construa uma aplicação que utilize o array [4, 2, 4, 6, 8, 3, 7, 1, 8, 6] e separe 
os números ímpares dos pares em arrays diferentes, exibindo cada um em mensagens separadas.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

const array = [4, 2, 4, 6, 8, 3, 7, 1, 8, 6];

const numerosPares = array.filter((item) => item % 2 === 0);
const numerosImpares = array.filter((item) => item % 2 !== 0);

alert(`Os números pares são: ${numerosPares}`);
alert(`Os números ímpares são: ${numerosImpares}`);
