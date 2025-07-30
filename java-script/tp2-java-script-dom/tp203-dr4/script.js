let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 3: Inversão de Frases";

/* 

Exercício 3: Inversão de Frases

Enunciado: Desenvolva uma aplicação que solicite uma frase e a exiba com os caracteres invertidos.

Exemplo: Javascript → tpircsavaJ.

Observações:

Valide sempre as entradas de dados.
Utilize prompt, alert, for ou forEach.
Teste o seu código.

*/

//Função que inverte os caracteres da frase com For
const inverterCaracteres = (frase) => {
  let fraseInvertida = "";
  for (let i = frase.length - 1; i >= 0; i--) {
    fraseInvertida += frase[i];
  }
  return fraseInvertida;
};

//Função que valida os dados de entrada do usuário
//Verifica se está vazio ou se inseriu apenas numeros além encerrar o programa caso clique em cancelar.
const inverterFrase = () => {
  let fraseUsuario = prompt(
    "Digite uma frase, vou apresentar a mesma invertida"
  );
  if (fraseUsuario === null) {
    alert("Programa encerrado pelo usuário");
  } else if (fraseUsuario.trim() === "" || !isNaN(fraseUsuario)) {
    alert("Digite uma frase válida");
    return inverterFrase();
  } else {
    alert(inverterCaracteres(fraseUsuario));
  }
};

//Chamar a função para executar o programa
inverterFrase();
