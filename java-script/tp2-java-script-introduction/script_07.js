/*
“script_07.js” → Um motorista deseja abastecer seu carro com um valor em reais. 
Escreva um programa para ler o preço do litro do combustível e o valor que o motorista deseja abastecer. 
Em seguida, informe quantos litros foram colocados no tanque.
*/
alert("Com o valor que deseja pagar, vou calcular quantos litros você pode abastecer");
let valorPago = prompt("Digite o valor a ser pago em Reais (R$)");
  valorPago =  Number(valorPago.replace(",", "."));

if (Number.isNaN(valorPago) || valorPago <= 0) {
  alert("Digite um valor numérico válido");

} else {
  
  let valorLitro = prompt("Digite o valor por litro de combustível em Reais (R$)");
  valorLitro =  Number(valorLitro.replace(",", "."));

  if (Number.isNaN(valorLitro) || valorLitro <= 0) {
    alert("Digite um valor numérico válido");

  } else {
    let totalLitros = valorPago / valorLitro;
    alert(
      `Com R$ ${valorPago
        .toFixed(2)
        .replace(".", ",")} você abasteceu um total de ${totalLitros
        .toFixed(2)
        .replace(".", ",")} litros`
    );
  }
}
