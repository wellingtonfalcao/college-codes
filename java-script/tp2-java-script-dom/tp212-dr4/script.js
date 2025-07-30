let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 12: Grupo - Pontuação do time";

/* 
Exercício 12: Grupo - Pontuação do time

No arquivo script.js, siga as etapas abaixo:

Pergunte ao usuário o nome do time de futebol, o número de vitórias, 
o número de empates e o número de derrotas.

Crie uma função que receba como parâmetros as respostas do usuário e informe:

- A quantidade total de pontos.
- A média de pontos por jogo.
- Chame esta função, passando os dados informados pelo usuário.

Observações:

- Cada vitória vale 3 pontos, cada empate vale 1 ponto e cada derrota vale 0 pontos.
- Utilize console.log para exibir os números ao usuário.
- Utilize prompt para perguntar ao usuário.
- Todo jogo só tem 3 resultados possíveis: vitória, empate ou derrota.
Pense nisso na hora de fazer a média.

*/

function ingresarNomeClube() {
    return prompt("Insira o nome do clube:"); 
  }
  
  // ************************************************************************************************
  
  function ingresarResultados(contador = 1, resultados = []) {
    const mens = ["as Vitórias", "os Empates", "as Derrotas"];
    while (contador <= 3) {
      const resultado = prompt(`Ingrese ${mens[contador - 1]}:`);
      if (resultado === null) {
        alert("Operação cancelada pelo usuario.");
        return null;
      }
      const valorValido = validarInput(resultado);
      if (valorValido !== false) {
        resultados.push(valorValido);
        contador++;
      } else {
        return ingresarResultados(contador, resultados);
      }
    }
    return resultados;
  }
  
  // **************************************************************************************
  
  function validarInput(input) {
    if (input.trim() === "") {
      alert("Erro: Precisa inserir um número inteiro.")
      return false;
    }
    
    input = Number(input);
    if (!Number.isInteger(input)) {
      alert("Erro: O número precisa ser inteiro.");
      return false;
    }
  
    if (input < 0) {
      alert("Erro: O número precisa ser positivo.");
      return false;
    }
    
    return input;
  }
  
  // ****************************************************************************************
  
  const calcularPontos = (victorias, empates, derrotas) => {
    const pontosTotais = victorias * 3 + empates;
    const mediaPontos = pontosTotais / (victorias + empates + derrotas);
    return {
      pontosTotais,
      mediaPontos,
    };
  };
  
  // ****************************************************************************************************
  // Implementação
  
  const nomeClube = ingresarNomeClube();
  const resultados = ingresarResultados();
  if (resultados) {
    const rendimentoTime = calcularPontos(
      resultados[0],
      resultados[1],
      resultados[2]
    );
    console.log(
      `Clube ${nomeClube}\n\nPontos totais do time: ${rendimentoTime.pontosTotais}\nMedia de pontos: ${rendimentoTime.mediaPontos.toFixed(1)}`
    );
  }
  
 