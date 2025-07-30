/* 

15 - Grupo - Trocando a imagem

No arquivo script.js, siga as etapas abaixo:

Após clicar na tag <img>.
Troque o conteúdo do seu atributo `src`.
Faça aparecer a imagem chamada “cafe.jpg”.
Não faça as alterações `manualmente` no arquivo `index.html`.
Somente pode-se adicionar uma função de click na img
Utilize o DOM para resolver o exercício.

*/

const mudarImagem = () => {
  let imagem = document.getElementById("cafe");
  imagem.setAttribute("src", "img/cafe.jpg");
};
