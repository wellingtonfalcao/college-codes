/* 

Exercício 1 Repetição de Nomes com Contagem

Enunciado: Construa uma aplicação que solicite um nome e exiba uma 
mensagem com esse nome repetido 10 vezes, mostrando o passo de 1 a 10 
antes do nome.

Exemplo: 1 - Machado de Assis.

Observações:

Valide sempre as entradas de dados.
Gere a mensagem concatenando as strings e colocando “\n” para separar linhas.
Utilize prompt, alert e for.
Teste o seu código.

*/

//Criei uma função a ser invocada para executar o código
let repetirNome = () => {
  //Entrada dos dados
  let nome = prompt("Digite um nome");

  //Validando se valor digitado não é um numero.
  if (isNaN(nome)) {
    let nomeInc = "";
    for (let i = 1; i <= 10; i++) {
      nomeInc += `${i} - ${nome}\n`;
    }
    alert(
      `Repetir o nome 10 vezes:\n${nomeInc}\nPrograma finalizado com sucesso.`
    );
    //Condição que encerra o programa caso o usuario clique em Cancelar
  } else if (nome === null) {
    alert("Programa finalizado pelo usuário");
    //Condição caso o usuário coloque um valor vazio, usei recursividade para que o mesmo coloque um valor válido.
  } else {
    if (nome === "") {
      alert("Você não digitou nada, digite um nome válido");
      return repetirNome();
    } else {
      alert(`"${nome}" não é um nome válido`);
      return repetirNome();
    }
  }
};

//Chamar a função para executar o código
repetirNome();
