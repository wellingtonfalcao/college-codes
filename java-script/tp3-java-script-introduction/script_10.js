// Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos.
// Construa um programa que obtenha a quantidade de doces fabricados e a capacidade da caixa e informe quantas caixas completas
// vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
// Considere a distribuição dos doces por caixas grandes (com 100 doces),
// médias (com 50 doces) e pequenas (com 20 doces).



// Olá Raphael, tinha feito uma outra forma de código mas vi que não estava de acordo com o enunciado (script_10_old.js). 
// Fiz também uma versão deste exercício aqui usando função (script_10_comfuncao.js, mas considerei mais este.
// Ambos estão na pasta "old".


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
            if(quantidadeDoces % 100 === 0) {
                let caixas = quantidadeDoces / 100;
                alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
            } else if (quantidadeDoces < 100) {
                alert("Não é possível preencher completamente a caixa desejada.")
            } else {
                let caixas = quantidadeDoces / 100;
                let sobras = quantidadeDoces % 100;
                alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) grandes completas e sobram ${sobras} doces, será necessário caixa adicional`);
            }
            break;

        case "2":
            if(quantidadeDoces % 50 === 0) {
                let caixas = quantidadeDoces / 50;
                alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
            } else if (quantidadeDoces < 50) {
                alert("Não é possível preencher completamente a caixa desejada.")
            } else {
                let caixas = quantidadeDoces / 50;
                let sobras = quantidadeDoces % 50;
                alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) médias completas e sobram ${sobras} doces, será necessário caixa adicional`);
            }
            break;

        case "3":
            if(quantidadeDoces % 20 === 0) {
                let caixas = quantidadeDoces / 20;
                alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
            } else if (quantidadeDoces < 20) {
                alert("Não é possível preencher completamente a caixa desejada.")  
            } else {
                let caixas = quantidadeDoces / 20;
                let sobras = quantidadeDoces % 20;
                alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) pequenas completas e sobram ${sobras} doces.`);
            }
            break;

        default:
            alert("Digite um valor entre 1 e 3");
            
    }
}







