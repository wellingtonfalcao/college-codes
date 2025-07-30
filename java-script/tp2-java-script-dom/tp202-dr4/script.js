/* 

Exercício 2 Exibição de Caracteres de uma Palavra

Enunciado: Crie uma aplicação que exiba os caracteres de uma palavra fornecida 
pelo usuário, um embaixo do outro.

Observações:

Valide sempre as entradas de dados: aqui pede-se somente 1 palavra.
Utilize prompt, alert, for ou forEach.
Teste o seu código.

*/
const exibirLetras = () => {
  let palavraUsuario = prompt("Digite apenas uma palavra");
  console.log(palavraUsuario);

  if (palavraUsuario === null) {
    alert("Programa finalizado pelo usuário");
    return 0; //Retorna que a função que foi finalizada
  }

  if (palavraUsuario === "") {
    alert("Você forneceu um valor vazio, digite novamente");
    return exibirLetras();
  }

  palavraUsuario = palavraUsuario.split(" ");
  if (palavraUsuario.length > 1) {
    alert(
      `Você digitou "${palavraUsuario
        .toString()
        .replaceAll(",", " ")}" que tem ${
        palavraUsuario.length
      } palavras, Digite apenas uma palavra.`
    );
    return exibirLetras();
  } else {
    caracteresVertical = "";
    caracteresArray = palavraUsuario.toString().split("");
    caracteresArray.forEach((letra) => (caracteresVertical += `${letra}\n`));
    alert(
      `A palavra: ${palavraUsuario} com seus ${
        caracteresArray.length
      } caracteres na vertical:\n${caracteresVertical.toUpperCase()}`
    );
  }
};

//Invocar a função
exibirLetras();
