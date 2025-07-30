/*

2 - Substituição de elementos de um array

Execute os passos definidos abaixo:

    Crie um array com os itens: "Martelo", "Chave de Fenda", "Serrote", “Alicate” e “Formão”.
    Exiba o array com alert.
    Substitua o primeiro item por “Chave Inglesa” e o último item por “Trena”.
    Exiba o array com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.

*/

//Entrada
let ferramentas = ["Martelo", "Chave de Fenda", "Serrote", "Alicate", "Formão"];

alert(ferramentas);

//Usei o length -1 para sempre pegar o ultimo item caso o array aumente de tamanho.
ferramentas[0] = "Chave Inglesa";
ferramentas[ferramentas.length - 1] = "Trena";

alert(ferramentas);
