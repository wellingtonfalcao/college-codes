/* 

16 Grupo - Trocando estilos

No arquivo script.js, siga as etapas abaixo:

Ao clicar na "div" de classe “conteudo”.
Modifique o atributo "style", fazendo as modificações:
A `cor de fundo` para azul.
A `letra` para branco.
A `cor de borda` para laranja.
Aumente sua `largura` e `altura` em 2px.
Não faça as alterações `manualmente` no arquivo `index.html`.
Somente pode-se adicionar uma função de click na div.
Utilize o DOM para resolver o exercício.

*/

//Executar uma função que aciona o evento OnClick
const mudarEstilo = () => {
  //Resgata e atribui os estilos a variavel conteudo
  const conteudo = document.querySelector(".conteudo");

  //Substituição do estilos via JS
  conteudo.style.backgroundColor = "blue";
  conteudo.style.border = "solid 2px orange";
  conteudo.style.color = "white";
  conteudo.style.width = "202px";
  conteudo.style.height = "202px";
};
