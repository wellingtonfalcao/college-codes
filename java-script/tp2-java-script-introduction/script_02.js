/* “script_02.js” → Crie um programa que receba o valor de um produto, 
o valor pago e calcule (a) o troco, (b) o troco arredondado para cima e (c) o 
troco arredondado para baixo. Mostre uma única mensagem com o resultado. */

//Entrada dos dados
let valorProduto = Number(
  prompt("Digite o valor do produto que deseja adquirir")
);
let valorPago = Number(prompt("Digite aqui o valor pago"));

//Pocessamento dos dados
let trocoExato = valorPago - valorProduto; // Subtração do valor pago pelo do produto
let trocoArredCima = Math.ceil(trocoExato);
let trocoArredBaixo = Math.floor(trocoExato);

//Saída dos dados e Validação
if (valorPago >= valorProduto) {
  alert(
    `Resumo da compra: \n O valor do produto é R$ ${valorProduto.toFixed(
      2
    )} e você pagou R$ ${valorPago.toFixed(
      2
    )}. Seu troco exato é R$ ${trocoExato.toFixed(
      2
    )}. Estou sem moedas... O valor arredondado para cima é de R$ ${trocoArredCima.toFixed(
      2
    )} e arredondado para baixo é de R$ ${trocoArredBaixo.toFixed(2)}.`
  );
} else {
  alert(
    "Não faço fiado, você precisa pagar um valor igual ou superior ao do produto, não se preocupe, lhe darei troco."
  );
}
