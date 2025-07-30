/* Crie um programa que calcule a área, perímetro e o diâmetro de um círculo, 
tendo o comprimento do raio informado pelo usuário. Use Math.PI.*/


//Entrada de dados
let valorRaio = prompt("Digite o valor do raio de um círculo em centímetros, lhe informarei a área, perímetro e diâmetro.");
  
  if (!valorRaio) {
    alert("Você cancelou o programa ou não inseriu um valor.\nO programa está encerrando.");
  } else {
    valorRaio = Number(valorRaio.replace(",","."));

    if(isNaN(valorRaio)) {
        alert("Digite apenas um número");
    } else {
        //Processamento dos dados validados
        let areaDoCirculo = Math.floor(Math.PI * Math.pow(valorRaio, 2));
        let perimetroCirculo = Math.floor(2 * Math.PI * valorRaio);
        let diametroCirculo = Math.floor(2 * valorRaio);
      
        //Saída de dados
        alert(
          `Um círculo com ${valorRaio} centímetros de raio tem:
        Área: ${areaDoCirculo};
        Perímetro: ${perimetroCirculo};
        Diametro: ${diametroCirculo};
        `
        );

    }
  
  
  }