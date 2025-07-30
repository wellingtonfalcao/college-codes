let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 9: Ordenação de Números (Ascendente e Descendente)";

/* 

Exercício 9: Ordenação de Números (Ascendente e Descendente)

Enunciado: Construa uma aplicação que defina 
um array [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15] 
e mostre-o em ordem ascendente e descendente na mesma mensagem.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

const arrayInicial = [2, 10, 3, 4, 5, 6, 20, 8, 9, 10, 30, 11, 12, 6, 13, 14, 2, 15];

//Chamar a função passando o array como argumento;
ordernar(arrayInicial);

function ordernar (array) {
    //Copiando e ordenando o array para não alterar a origem.
    let arrayAsc = [...arrayInicial].sort((a,b) => a - b );
    let arrayDesc = [...arrayInicial].sort((a,b) => b - a );
    alert(`Os numeros em ordem ascendente: ${arrayAsc}\n\nOs numeros em ordem descendente: ${arrayDesc}`)
}



