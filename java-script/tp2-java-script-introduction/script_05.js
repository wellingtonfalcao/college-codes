/* 
“script_05.js” → Crie um programa que receba na entrada o valor de três 
notas de um aluno - com valor entre 0 e 10 e informe a média entre elas. 
*/
alert(
  "Calculadora de média, informe a seguir as respectivas notas do aluno entre 0 e 10."
);

let nomeDoAluno = prompt("Digite o nome do aluno");
console.log(nomeDoAluno);

let notaUm = Number(
  prompt(`Me informe a primeira nota do(a) aluno(a) ${nomeDoAluno}`).replace(
    ",",
    "."
  )
);
if (notaUm <= 0 || notaUm > 10 || Number.isNaN(notaUm)) {
  alert("Digite um valor de nota entre 0 e 10");
}
let notaDois = Number(
  prompt(`Agora a segunda nota do(a) aluno(a) ${nomeDoAluno}`).replace(",", ".")
);
if (notaDois <= 0 || notaDois > 10 || Number.isNaN(notaDois)) {
  alert("Digite um valor de nota entre 0 e 10");
}
let notaTres = Number(
  prompt(`Por fim, a terceira nota do(a) aluno(a) ${nomeDoAluno}`).replace(
    ",",
    "."
  )
);
if (notaTres <= 0 || notaTres > 10 || Number.isNaN(notaTres)) {
  alert("Digite um valor de nota entre 0 e 10");
}

let mediaNotas = ((notaUm + notaDois + notaTres) / 3).toFixed(1);
let mediaDaEscola = 7;

if (mediaNotas >= mediaDaEscola) {
  alert(
    `A média do(a) aluno(a) ${nomeDoAluno} é ${mediaNotas.replace(
      ".",
      ","
    )} e ele está aprovado`
  );
} else {
  alert(
    `A média do(a) aluno(a) ${nomeDoAluno} é ${mediaNotas.replace(
      ".",
      ","
    )} e ele está reprovado`
  );
}
