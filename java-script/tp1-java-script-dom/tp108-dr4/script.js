/*

Exercício 8: Ordenando arrays - parte 2.

Execute os passos definidos abaixo:

    Crie um array com os itens: 78, 96, 34, 57, 81, 25, 14, 60 e 29.
    Exiba o array resultante com alert.
    Ordene o array de forma ascendente.
    Exiba o array resultante com alert.
    Ordene o array de forma descendente.
    Exiba o array resultante com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.

*/

let numeros = [78, 96, 34, 57, 81, 25, 14, 60, 29];

//Exibir numeros foram de ordem
alert(`Ordem atual: ${numeros}`);

let numerosOrdemAscendente = numeros.sort((a, b) => a - b);
//Exibir numeros foram de ordem
alert(`Ordem ascendente: ${numerosOrdemAscendente}`);

let numerosOrdemDescendente = numeros.sort((a, b) => b - a);
//Exibir numeros foram de ordem
alert(`Ordem descendente: ${numerosOrdemAscendente}`);
