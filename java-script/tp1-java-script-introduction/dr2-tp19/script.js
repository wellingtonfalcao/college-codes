/* 
DR2-TP1.9

Crie um programa que realize o cálculo da energia cinética. Para isto:

- Solicite um número com prompt que representa a massa.
- Solicite um número com prompt que representa a velocidade.
- Exiba em um alerta a energia cinética total.

Observações:

Os códigos necessitam ser inseridos no arquivo script.js.

Segue a fórmula:
Ec = 1/2 . m . v²

*/

//ENTRADA

let numeroMassa = Number(prompt("Digite o número de massa em KG"));
let numeroVelocidade = Number(
  prompt("Digite a velicidade em metros por segundo (m/s)")
);

//PROCESSAMENTO

/*
(usei 3 métodos) e entendi que há muitos outros, 
nestes exemplos usei o operador de exponenciação (**) como visto na aulas.
*/

// Usei o método que segue à risca a formula, representei 1/2 em decimal, sendo 0.5.
alert(
  "A energia cinética total é de " +
    0.5 * numeroMassa * numeroVelocidade ** 2 +
    " joules"
);

// Usei o método de multiplicar a massa pela velocidade ao quadrado e depois dividir por 2
alert(
  "A energia cinética total é de " +
    (numeroMassa * numeroVelocidade ** 2) / 2 +
    " joules"
);

// Usei o método que divide o valor da massa por 2 (sendo assim tiro a metade) e multiplico pelo resultado da velocidade ao quadrado.
alert(
  "A energia cinética total é de " +
    (numeroMassa / 2) * numeroVelocidade ** 2 +
    " joules"
);
