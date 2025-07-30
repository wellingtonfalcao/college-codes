/* 

11- Alterando atributo

No arquivo `script.js`, selecione o elemento com id "card" e 
altere através de alteração de atributo via JavaScript:

A cor de fundo para amarelo.
A borda para sólida, vermelha com 4px de largura.
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o DOM para resolver o exercício.

*/

let card = document.getElementById("card");

//Elemento carregado
console.log(`Antes: ${card.outerHTML}`);

card.style.backgroundColor = "yellow";
card.style.border = "solid 4px red";

//Elemento alterado
console.log(`Depois: ${card.outerHTML}`);
