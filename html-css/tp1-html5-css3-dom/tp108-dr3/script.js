/* 

8 Utilizando a palavra reservada “this”

No arquivo script.js, siga as etapas abaixo:

Crie um objeto `“advogado”` que possua as propriedades “nome”, “horasTrabalhadas” e “valorHora”.
Crie também neste objeto, um método chamado “calcularGanho”.
Chame o método "calcularGanho" através de um objeto instanciado.
No método, realize a multiplicação das “horas trabalhadas” pelo valor que o advogado ganha por hora.
Use a palavra chave “this".

*/

const advogado = {
  nome: "Carlos",
  horasTrabalhadas: 40,
  valorHora: 200,
  calcularGanho() {
    return this.horasTrabalhadas * this.valorHora;
  },
};

//Exibir nome do advogado, horas trabalhadas, valor hora e calculo de ganho.
alert(
  `O advogado ${advogado.nome} trabalhou ${
    advogado.horasTrabalhadas
  } horas, seu valor hora é de R$ ${
    advogado.valorHora
  } então receberá R$ ${advogado.calcularGanho()}`
);
