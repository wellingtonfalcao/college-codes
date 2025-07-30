/*
“script_12.js” → Crie um programa que contenha os seguintes itens:
Crie um comentário explicando a diferença entre let e const. Mostre exemplos de uso.
Crie um comentário explicando porque utilizar var ou variáveis não declaradas é uma má prática.
*/

// "Let" é uma variável dinâmica que recebe um valor inicial que pode ser substituido por um outro valor durante a execução do código.

//EXEMPLO DE LET
let carro = "opala"; // Atribui um valor string "opala" na variável carro
console.log(carro);

carro = "chevette"; // Atribui um valor string "chevette" substituindo o valor "opala"
console.log(carro);

// "Const" é uma variável constante que quando recebe um valor inicial não é permitida alteração de seu valor durante a execução do código.

// EXEMPLO DE CONST
const moto = "kawasaki"; // Atribui um valor string "kawasaki" para a constante moto
console.log(moto);

//moto = "Harley Davidson";
//console.log(moto);

// Apresentará o erro : "Uncaught TypeError: Assignment to constant variable." Não pode atribuir um novo valor a uma constante.
// Comentei para não paralisar o código.

/*
O VAR gera problemas por não respeitar o bloco ao qual está sendo aplicado, sendo essencialmente de bloco global,
podendo este valor ser acessado fora do bloco como exemplifico abaixo.
*/

// EXEMPLO DE VAR E SEU PROBLEMA
if (true) {
  var animal = "gato";
}

console.log(animal); // consigo acessar o valor string atribuido dentro de um bloco, exibindo "gato"

if (true) {
  let animal2 = "cachorro";
}

// console.log(animal2); || Com let apresentará erro de variável não definida.
