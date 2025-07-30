// Crie um programa que leia um número inteiro e mostre se o mesmo é positivo, negativo ou zero.

let numeroInteiro = prompt("Digite um número inteiro, vou te informar se é negativo, positivo ou neutro")

if(!numeroInteiro) {
    alert("Você cancelou ou digitou um valor nulo. Programa está encerrando.");
} else {
    numeroInteiro = Number(numeroInteiro.replace(",","."));
    if(!Number.isInteger(numeroInteiro)){
        alert("Digite um número inteiro.")
    } else {
        if(numeroInteiro === 0){
            alert(`O número ${numeroInteiro} é nulo (zero).`)
        } else if (numeroInteiro < 0) {
            alert(`O número ${numeroInteiro} é negativo.`)
        } else {
            alert(`O número ${numeroInteiro} é positivo.`)
        }
    }
}