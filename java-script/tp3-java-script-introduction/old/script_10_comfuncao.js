// Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos.
// Construa um programa que obtenha a quantidade de doces fabricados e a capacidade da caixa e informe quantas caixas completas
// vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
// Considere a distribuição dos doces por caixas grandes (com 100 doces),
// médias (com 50 doces) e pequenas (com 20 doces).



// Entrada dos dados com validação
let quantidadeDoces = prompt("Digite a quantidade doces");
if(!quantidadeDoces || !Number.isInteger(Number(quantidadeDoces)) || Number(quantidadeDoces) < 0) {
    alert ("Digite uma quantidade de doces válida");
} else {
    // Seleção do tamanho da caixa
    let tamanhoCaixa = prompt(`Selecione a caixa desejada:
    (1) Caixas grandes com 100 unidades
    (2) Caixas médias com 50 unidades
    (3) Caixas pequenas com 20 unidades
    `);
    //Processamento dos dados
    switch (tamanhoCaixa) {
        case "1":
            calculoCaixaCompleta(quantidadeDoces, 100);
            break;

        case "2":
            calculoCaixaCompleta(quantidadeDoces, 50);
            break;

        case "3":
            calculoCaixaCompleta(quantidadeDoces, 20);
            break;

        default:
            alert("Digite um valor entre 1 e 3");   
    }
}

// -------------------------------------------- FUNCAO -----------------------------------------------------

function calculoCaixaCompleta (quantidadeDoces, capacidadeCaixa) {
    if(quantidadeDoces % capacidadeCaixa === 0) {
        let caixas = quantidadeDoces / capacidadeCaixa;
        alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
    } else if (quantidadeDoces < capacidadeCaixa) {
        alert("Não é possível preencher completamente a caixa desejada.")
    } else {
        let caixas = quantidadeDoces / capacidadeCaixa;
        let sobras = quantidadeDoces % capacidadeCaixa;
        alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) grandes completas e sobram ${sobras} doces, será necessário caixa adicional`);
    }
}