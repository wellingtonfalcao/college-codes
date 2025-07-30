/*
“script_13.js” → Crie um programa que contenha os seguintes itens:
Crie um comentário explicando a diferença entre os valores null e undefined. 
Apresente um exemplo onde o tipo undefined aparece no JS, e também um exemplo de uso prático do tipo null.
*/

/* 
Uma variável de valor "null" pode ser utilizada para fazer uma declaração explícita de um valor nulo para uma determinada variável; Ex,: let variavel = null;
Uma variável de valor "undefined" é exibido caso uma variável tenha sido declarada e não tenha recebido um valor explícitamente; Ex.: let variavel;

No contexto flexível ambos possuem valor considerado "inexistente", o que pode parecer dar nos mesmo, mas esbarra com uma questão no JavaScript;

O grande problema é que ao utilizar um comparador "=="" estamos comparando apenas o valor, ao utilizar "===" é uma comparação estrita onde comparar não apenas o valor mas também o tipo.
*/

// ------ Exemplo de uso do undefined -----------
let variavelUndefined; // Declarei um variavel sem nenhuma atribuição
console.log(variavelUndefined);

// ------ Exemplo de uso do null -----------
let variavelNula = null; // Declarei um valor nulo de forma global
console.log(variavelNula);

// ------ Testando ambos para ver a diferença no console -------
if (variavelNula == variavelUndefined) {
  console.log("Não estrita");
} else {
  console.log("Estrita");
}

if (variavelNula === variavelUndefined) {
  console.log("Não estrita");
} else {
  console.log("Estrita");
}
