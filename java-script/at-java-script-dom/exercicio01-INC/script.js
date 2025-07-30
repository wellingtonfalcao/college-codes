/*

1 Elemento mais frequente em um array

Enunciado: Crie uma página com um programa JavaScript para 
encontrar o item mais frequente em um array.

Observações:
- Crie um array com pelo menos 10 elementos com alguns repetidos.
- Use “document.write” para mostrar as mensagens no próprio HTML de saída: 
mostre o array original e a sua resposta.
- Teste o seu programa com cenários diferentes.

Considerações:
O array original poderá ser alterado para testar outros cenários de execução.

*/

const frutas = [
    "Maçã",
    "Banana",
    "Banana",
    "Laranja",
    "Morango",
    "Abacaxi",
    "Uva",
    "Morango",
    "Manga",
    "Morango",
    "Kiwi"
  ];

  let frutasRepeticoes = [...new Set(frutas)].map(fruta => {
    return [fruta, frutas.filter ( item => (fruta === item)).length];
  });

 
 console.log(Math.max(...frutasRepeticoes[1]))
  
//  frutas.filter ( fruta => fruta === "Morango");
  // console.log(quantidade)



// let div = document.createElement("div");
// div.innerHTML = `<p>O array original é: [${contagem}]</p>`
// document.body.appendChild(div)
  