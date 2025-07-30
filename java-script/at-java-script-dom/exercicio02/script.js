let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 2: Remover duplicatas em um array";

import { transformarCaixaBaixa, removerRepetidos } from "./funcoes.js";

/*

2 Remover duplicatas em um array

Enunciado: Crie uma página com um programa JavaScript para remover itens duplicados de um array, 
ignorando a diferenciação entre maiúsculas e minúsculas.

Observações:

Crie um array com pelo menos 10 elementos com alguns repetidos.
Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
Teste o seu programa com cenários diferentes.

Considerações:
O array original poderá ser alterado para testar outros cenários de execução.

*/

window.addEventListener("load", () => {
  
  const frutas = [
    "Maçã",
    "Jaca",
    "Banana",
    "Banana",
    "Laranja",
    "MORANGO",
    "Abacaxi",
    "Uva",
    "JACA",
    "JaCA",
    "morango",
    "Manga",
    "Morango",
    "PESSEGO",
    "PEssEGO",
    "Kiwi"
  ];

  let frutasCaixaBaixa = removerRepetidos(transformarCaixaBaixa(frutas))

  document.write(`<h3>O array original frutas:</h3><p>${frutas.join(", ")}</p>
    <h3>O array padronizado em caixa baixa e com repetições removidas</h3><p> ${frutasCaixaBaixa.join(", ")}</p>`);
});