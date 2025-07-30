// Uma loja está em promoção e fornece 20% de desconto para gestantes e 15% de desconto para aposentados
// e 10% para pensionistas. Esses descontos são aplicados se o valor da compra for maior ou igual a R$80,00.
// Se o valor da compra for abaixo de R$80,00 o desconto é 15% para gestantes, 10% para aposentados e 5%
// para pensionistas. No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite o valor total da compra efetuada e um código que identifique se o comprador é:
// Gestante (A)
// Aposentado (B)
// Pensionista (C)
// A aplicação deve retornar o valor final da compra de acordo com o tipo de consumidor.
// Caso o tipo de consumidor não exista, exibir uma mensagem informando erro e não exibir o valor da compra do usuário.

//Entrada de de dados: Valor da compra
let valorCompra = prompt("Digite o valor da compra");
valorCompra = Number(valorCompra);

//Validar entrada caso seja inserido número negativo ou o valor seja nulo
if (!valorCompra || valorCompra < 0) {
  alert("Programa Encerrado. Você cancelou ou digitou um valor inválido");
} else {
    
    // Validar caso seja um valor igual superior a R$ 80,00 faz processamento com devidos descontos
    if (valorCompra >= 80) {
        gestante = (valorCompra - valorCompra * 0.2).toFixed(2).replace(".", ",");
        aposentado = (valorCompra - valorCompra * 0.15).toFixed(2).replace(".", ",");
        pensionista = (valorCompra - valorCompra * 0.1).toFixed(2).replace(".", ",");
    
    // Caso o valor seja inferior a R$ 80,00 faz o processamento com devidos descontos
    } else {
        gestante = (valorCompra - valorCompra * 0.15).toFixed(2).replace(".", ",");
        aposentado = (valorCompra - valorCompra * 0.1).toFixed(2).replace(".", ",");
        pensionista = (valorCompra - valorCompra * 0.05).toFixed(2).replace(".", ",");
    } 
    
    // Mais um entrada de dados, para saber a qual categoria pertence o comprador.
    let categoriaDesconto = prompt(`Digite a categoria de desconto sendo:
    (A) Gestantante, (B) Aposentado e (C) Pensionista.`);
    
    // Informará o valor apenas se for A, B ou C. Fora isso, dará tela de erro.
    switch (categoriaDesconto){
        case "A":
            alert(`O valor final para gestante é de R$ ${gestante}`);
            break;
        case "B": 
            alert(`O valor final para aposentado é de R$ ${aposentado}`);
            break;
        case "C": 
            alert(`O valor final para pensionista é de R$ ${pensionista}`);
            break;
        default:
            alert("Erro: categoria inválida");
    }
}