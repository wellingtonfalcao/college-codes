/* 

13 Grupo - Objeto com método usando “this”

No arquivo script.js, siga as etapas abaixo:

Peça ao usuário para informar o raio de um círculo.
Crie um objeto “circulo” que tenha:
Uma propriedade de `raio` com o valor informado pelo usuário.
E dois métodos, um para calcular a `circunferência` e outro para calcular a `área`.
Exiba a circunferência através da chamada do método respectivo do objeto “circulo”.
Exiba a área através da chamada do método respectivo do objeto “circulo”.
DICA: talvez seja necessário usar a constante `Math.PI` para este exercício:
Considere para a área:
Área = Math.PI * raio * raio
Considere para a circunferência:
Circunferência = Math.PI * raio * 2

*/

const circulo = {
  raio: parseInt(prompt("Digite o raio de um circulo")),
  area() {
    return Math.floor(Math.PI * this.raio ** 2);
  },
  circunferencia() {
    return Math.floor(Math.PI * this.raio * 2);
  },
};

alert(
  `Um circulo de raio ${
    circulo.raio
  } possui uma área de ${circulo.area()} e circunferencia de ${circulo.circunferencia()}`
);
