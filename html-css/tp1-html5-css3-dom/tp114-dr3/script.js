/* 

14 Grupo - Alterando atributos com if

No arquivo script.js, siga as etapas abaixo:

Verifique se o atributo `href` da tag `<a>` com id `link` está com conteúdo: “https://www.infnet.edu.br/infnet/instituto/”.
Caso não esteja, faça com que “https://www.infnet.edu.br/infnet/instituto/” se torne o endereço deste link
Não faça as alterações `manualmente` no arquivo `index.html`.
Utilize o DOM para resolver o exercício.

*/

const verificarEndereco = () => {
  let linkHtml = document.getElementById("link");
  let atributoHref = linkHtml.getAttribute("href");
  const linkCorreto = "https://www.infnet.edu.br/infnet/instituto/";

  //Verifica se o endereço está correto
  if (atributoHref !== linkCorreto) {
    alert(
      `o link para o Instituto Infnet informado (${atributoHref}) está incorreto. Foi substituido por ${linkCorreto} com sucesso.`
    );

    //Recebe o link correto
    atributoHref = linkHtml.setAttribute("href", linkCorreto);
  } else {
    alert("Link está correto, nenhuma correção foi necessária");
  }
};

verificarEndereco();
