// Escreva um programa que simule um caixa eletrônico que receba um valor 
// de saque inteiro e múltiplo de 10 e mostre quantas notas de 100, 50, 20 e 10 ele paga. 
// Não considere a quantidade de notas disponíveis no cofre do caixa-eletrônico.


//Entrada de dados
let valorSaque = prompt("Digite o valor que deseja sacar");


// Validação de valor núlo ou cancelado
if(!valorSaque) {
    alert("Operação Encerrada. Você cancelou ou digitou um valor nulo");
} else {
    //Convertar para número e verificar se a string é um número
    valorSaque = Number(valorSaque);
    if(isNaN(valorSaque)){
        alert("Valor inválido. Digite apenas um valor numérico inteiro");
    } else{
        //Validar se o valor é inferior a R$ 10,00
        if(valorSaque < 10){
            alert("Valor mínimo para saque é de R$ 10,00");
        } else if ((valorSaque % 10) != 0) {
            alert(`O valor informado de R$ ${valorSaque},00 não pode ser sacado, este caixa não fornece cédulas inferiores a R$ 10,00.`);
        } else {
            notasDe10 = valorSaque / 10;
            notasDe20 = valorSaque / 20;
            notasDe50 = valorSaque / 50;
            notasDe100 = valorSaque / 100;

            alert(`Você pode sacar o valor usando até:
            Nota de R$ 10,00: ${Math.floor(notasDe10)} Cédula(s)
            Nota de R$ 20,00: ${Math.floor(notasDe20)} Cédula(s)
            Nota de R$ 50,00: ${Math.floor(notasDe50)} Cédula(s)
            Nota de R$ 100,00: ${Math.floor(notasDe100)} Cédula(s)
            `)
        }
    }
}