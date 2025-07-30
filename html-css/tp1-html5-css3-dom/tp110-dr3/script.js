/* 

10 - Removendo atributo

No arquivo script.js, siga as etapas abaixo:

Remova o atributo “target” na tag <a>.
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o DOM para resolver o exercício.

*/

//Obtenho o id do elemento imagem e insiro o atributo title
let ancora = document.getElementById("link");

// Exibir antes da remoção do atributo
console.log(`Antes: ${ancora.outerHTML}`);

ancora.removeAttribute("target");

// Exibir depois da remoção do atributo
console.log(`Depois: ${ancora.outerHTML}`);
