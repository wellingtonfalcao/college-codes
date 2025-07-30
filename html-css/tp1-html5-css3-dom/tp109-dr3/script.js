/* 

9 - Adicionando atributo

Adicione o atributo “title” na tag <img>, colocando o conteúdo como “grãos de café”.
Observação:

Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o DOM para resolver o exercício.

*/

//Obtenho o id do elemento imagem e insiro o atributo title
let imagem = document.getElementById("cafe");
imagem.setAttribute("title", "grãos de café");
