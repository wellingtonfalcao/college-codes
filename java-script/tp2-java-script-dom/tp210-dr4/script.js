let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 10: Ordenação de Nomes (Ascendente e Descendente)";

/* 

Exercício 10: Ordenação de Nomes (Ascendente e Descendente)

Enunciado: Construa uma aplicação que defina um array com 10
nomes de escritores (se quiser use o mesmo da questão 7)
e mostre uma mensagem com os nomes em ordem ascendente e 
descendente na mesma mensagem.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/

const escritoresBrasileiros = [
    "Machado de Assis",
    "Clarice Lispector",
    "Jorge Amado",
    "Carlos Drummond de Andrade",
    "Graciliano Ramos",
    "Cecília Meireles",
    "Guimarães Rosa",
    "Monteiro Lobato",
    "Lygia Fagundes Telles",
    "Rubem Fonseca"
];

//Chamar a função passando o array como argumento;
ordernar(escritoresBrasileiros);

function ordernar (array) {
    //Copiando e ordenando o array para não alterar a origem.
    let arrayAsc = [...array].sort().join(", ");
    let arrayDesc = [...array].reverse().join(", ");
    alert(`Os escritores em ordem ascendente:\n${arrayAsc}\n\nOs escritores em ordem descendente:\n${arrayDesc}`)
}



