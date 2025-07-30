// Crie um programa que receba um valor de temperatura em Celsius e converta-o para Fahrenheit. F = (C * 9/5)+32


// Entrada de dados
let temperaturaCelsius = prompt("Digite uma temperatura em Celsius, converterei para Fahrenheit");

//Processo de validação dos dados
if(!temperaturaCelsius) {
    alert("Você cancelou o programa ou digitou um valor nulo, encerrando programa...")
} else {
    temperaturaCelsius = Number(temperaturaCelsius.replace(",","."));
    if(isNaN(temperaturaCelsius)) {
        alert("Digite um valor númérico válido")
    } else {
        //Processamento do dado e saída
        let temperaturaFahrenheit = ((temperaturaCelsius * 9 / 5) + 32);
        alert(`A temperatura de ${temperaturaCelsius}°C é de ${temperaturaFahrenheit}°F`);
    }
}