/*
----------------------------------------------------------------
Exercicio 12 - Fábrica de Doces 
----------------------------------------------------------------

Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos. 
Construa um programa que obtenha a quantidade de doces fabricados e informe quantas caixas completas 
vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
Distribuir os doces por caixas grandes (com 40 doces), médias (com 30 doces) e pequenas (com 20 doces).

*/

// Entrada dos dados com validação
let quantidadeDoces = prompt("Digite a quantidade doces");
if(!quantidadeDoces || !Number.isInteger(Number(quantidadeDoces)) || Number(quantidadeDoces) < 0) {
    alert ("Digite uma quantidade de doces válida");
} else {
    // Seleção do tamanho da caixa
    let tamanhoCaixa = prompt(`Selecione a caixa desejada:
    (1) Caixas grandes com 40 unidades
    (2) Caixas médias com 30 unidades
    (3) Caixas pequenas com 20 unidades
    `);

    //Processamento dos dados
    switch (tamanhoCaixa) {
        case "1":
            if(quantidadeDoces % 40 === 0) {
                let caixas = quantidadeDoces / 40;
                alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
            } else if (quantidadeDoces < 40) {
                alert("Não é possível preencher completamente a caixa desejada.")
            } else {
                let caixas = quantidadeDoces / 40;
                let sobras = quantidadeDoces % 40;
                alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) grandes completas e sobram ${sobras} doces, será necessário caixa adicional`);
            }
            break;

        case "2":
            if(quantidadeDoces % 30 === 0) {
                let caixas = quantidadeDoces / 30;
                alert(`${quantidadeDoces} doces, preenchem ${caixas} caixa(s) completas.`);
            } else if (quantidadeDoces < 30) {
                alert("Não é possível preencher completamente a caixa desejada.")
            } else {
                let caixas = quantidadeDoces / 30;
                let sobras = quantidadeDoces % 30;
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
                alert(`${quantidadeDoces} doces preenchem ${Math.floor(caixas)} caixa(s) pequenas completas e sobram ${sobras} doces numa incompleta.`);
            }
            break;

        default:
            alert("Digite um valor entre 1 e 3");
            
    }
}


// SEGUNDO CÓDIGO USANDO OUTRA LÓGICA
// Neste distribuo a quantidade caso seja multiplo de 40, 30 ou 20, se sobrar algum coloco numa caixa incompleta.

/*
//Entrada do valor 
const quantidadeDoces2 = parseInt(prompt("Digite uma quantidade total de docês"));

const caixaPequena = 20;
const caixaMedia = 30;
const caixaGrande = 40;
let totalcaixas;
let sobras;


if (quantidadeDoces2 % caixaGrande === 0) {
    totalcaixas = quantidadeDoces2 / caixaGrande;
    alert(`Serão necessárias ${totalcaixas} caixas grandes completas`)
} else if (quantidadeDoces2 % caixaMedia === 0) {
    totalcaixas = quantidadeDoces2 / caixaMedia;
    alert(`Serão necessárias ${totalcaixas} caixas medias completas`)
} else if (quantidadeDoces2 % caixaPequena === 0 || quantidadeDoces2 % caixaPequena !== 0 ) {
    totalcaixas = Math.floor(quantidadeDoces2 / caixaPequena);
    sobras = quantidadeDoces2 % caixaPequena;
    alert(`Serão necessárias ${totalcaixas} caixas pequenas e sobram ${sobras} doces para ocupar uma caixa de 20 incompleta.`)
}


const quantidadeDoces2 = parseInt(prompt("Digite uma quantidade total de docês"));

const caixaPequena = 20;
const caixaMedia = 30;
const caixaGrande = 40;
let totalcaixas;
let sobras;


if (quantidadeDoces2 % caixaGrande === 0) {
    totalcaixas = quantidadeDoces2 / caixaGrande;
    alert(`Serão necessárias ${totalcaixas} caixas grandes completas`)
} else if (quantidadeDoces2 % caixaMedia === 0) {
    totalcaixas = quantidadeDoces2 / caixaMedia;
    alert(`Serão necessárias ${totalcaixas} caixas medias completas`)
} else if (quantidadeDoces2 % caixaPequena === 0 || quantidadeDoces2 % caixaPequena !== 0 ) {
    totalcaixas = Math.floor(quantidadeDoces2 / caixaPequena);
    sobras = quantidadeDoces2 % caixaPequena;
    alert(`Serão necessárias ${totalcaixas} caixas pequenas e sobram ${sobras} doces para ocupar uma caixa de 20 incompleta.`)
}

*/