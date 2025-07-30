/*
“script_10.js” → Crie um programa que calcule a área, perímetro e o 
diâmetro de um círculo, tendo o comprimento do raio informado pelo usuário. Use Math.PI.
*/

//Entrada de dados
let valorRaio = Number(
  prompt(
    "Digite o valor do raio de um círculo em centímetros, lhe informarei a área."
  )
);

if (Number.isNaN(valorRaio) || valorRaio <= 0) {
  alert("Digite um valor numérico válido");
} else {
  //Processamento de dados

  let areaDoCirculo = Math.floor(Math.PI * Math.pow(valorRaio, 2));
  let perimetroCirculo = Math.floor(2 * Math.PI * valorRaio);
  let diametroCirculo = Math.floor(2 * valorRaio);

  //Saída de dados
  alert(
    `Um círculo com ${valorRaio} centímetros de raio tem:
  Área:: ${areaDoCirculo};
  Perímetro: ${perimetroCirculo};
  Diametro: ${diametroCirculo};
  `
  );
}
