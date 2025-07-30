let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 4: Identificação de Idades Extremas";

/* 

Exercício 4: Identificação de Idades Extremas

Enunciado: Crie uma aplicação que peça ao usuário que insira 5 idades, 
armazene-as em um array e informe a idade do mais novo e do mais velho. 

Observações:

Não é preciso validar idades repetidas, mas evite-as no seu teste.
Valide sempre as entradas de dados.
Utilize prompt, alert e sort.
Teste o seu código.

*/


// Função incial que fará as validações e será chamada para exibir a saida de dados
const validarIdades = () => {
  let idades = prompt("Forneça 5 idades separadas por espaço");
  
  if(idades === null){
    alert("Programa cancelado pelo usuario");
    return 0;
  }
  
  idades = idades.trim().split(" ");
  
  let intIdades = idades.map((item) => Number(item));
  let flag = intIdades.every((item) => !isNaN(item) && item > 0);

  if(flag === false || intIdades.length !== 5) {
    alert("Digite apenas 5 idades com números positivos separadas por espaço")
    return validarIdades(); 
  } 
  return ordenarIdades(intIdades);
}

// Função que fará a ordenação e retornará a menor e maior idade
const ordenarIdades = (idades) => {
 idades.sort((a,b) => a - b);
 let maiorIdade = idades.at(-1);
 let menorIdade = idades[0];
 alert(`A maior idade é ${maiorIdade} e a menor é ${menorIdade}`);
}

validarIdades();



