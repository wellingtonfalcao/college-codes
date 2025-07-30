/*

Exercício 3: Inclusão de elementos em Arrays.

Execute os passos definidos abaixo:

    Crie um array com os itens: "Recife", "Belém", "Brasília", “Curitiba”, “Vitória” e “Rio de Janeiro”.
    Exiba o array com alert.
    Adicione os itens “São Paulo”, “Petrópolis” no final do array.
    Exiba o array com alert.
    Adicione os itens “Gramado”, “Cuiabá” depois do índice 2.
    Exiba o array com alert.

Observações:

    Implemente da forma mais simples e objetiva possível.
    Não use estruturas de controle de repetição.



*/

// Lista de capitais
let capitais = [
  "Recife",
  "Belém",
  "Brasília",
  "Curitiba",
  "Vitória",
  "Rio de Janeiro",
];

// mostrar cidades no array
alert(`Cidades brasileiras: ${capitais}`);

// Inserir novas cidade com o metodo push
capitais.push("São Paulo", "Petrópolis");

alert(`Cidades brasileiras adicionais com push: ${capitais}`);

// Inserir novas cidade com o metodo splice após o índice 2
capitais.splice(3, 0, "Gramado", "Cuiabá");

alert(`Cidades brasileiras adicionais com splice: ${capitais}`);
