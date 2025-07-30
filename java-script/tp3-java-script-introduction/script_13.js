// Tendo como dados de entrada a altura e o peso de uma pessoa, construa um algoritmo que calcule seu IMC, utilizando a seguinte fórmula:

// IMC = peso / (altura*altura)

// No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário a altura e o peso.
// A aplicação deve informar o IMC do usuário e em qual classificação o usuário se encontra, seguindo a imagem abaixo.

 
// Obs: Como não foi informada a imagem, considerei uma tabela com 6 graus de IMC.


//Entrada do dado de altura
let valorAltura = prompt("Digite sua altura em metros (Ex.: 1,72)")

//Validação do dado de altura
if(!valorAltura) {
    alert("Você cancelou a execução do programa ou digitou nenhum valor, o programa será encerrado.");
} else {
    valorAltura = Number(valorAltura.replace(",","."));
    if(isNaN(valorAltura) || valorAltura <= 0 || valorAltura >= 3) { // 3 é caso o usuario digite um valor de altura impossível.
        alert("Digite um valor de altura válido em centímetros.")
    } else {
        let valorPeso = prompt("Digite seu peso em quilos");
        valorPeso = Number(valorPeso);
        if(isNaN(valorPeso) || valorPeso <= 0){
            alert("Digite um valor de peso válido em quilos.")
        } else {
            let valorIMC = valorPeso / Math.pow(valorAltura, 2);

            if(valorIMC < 18.5) {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Magreza`); 
            } else if (valorIMC > 18.5 && valorIMC <= 24.9) {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Saudável`); 
            } else if (valorIMC >= 25 && valorIMC <= 29.9) {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Sobrepeso`); 
            } else if (valorIMC >= 30 && valorIMC <= 34.9) {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Obesidade Grau I`); 
            } else if (valorIMC >= 35 && valorIMC <= 39.9) {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Obesidade Grau II (severa)`); 
            } else {
                alert(`Seu IMC é de ${valorIMC.toFixed(2)} e sua classificação é Obesidade Grau III (mórbida)`); 
            }
            
        }
    }
}