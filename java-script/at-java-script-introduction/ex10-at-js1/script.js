/*
----------------------------------------------------------------
Exercicio 10 - Endereço IP   
----------------------------------------------------------------

Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. 
Os endereços no intervalo de 0 a 127 são classe A, de 128 a 191 são classe B, 
de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E. 
Crie um programa que leia o primeiro octeto, no formato de um número inteiro, de um 
endereço IP e informe a sua classe. Use prompt e alert.

*/

let enderecoIp = parseInt(prompt("Digite um endereço IP e informarei qual sua classe"));

//Processamento e validação, verifica se é um número negativo ou superior a 255.
if (!enderecoIp) {
    alert("Valor inválido ou cancelado");
} else if (enderecoIp < 0 || enderecoIp > 255) { 
    alert("Digite um valor de octeto entre 0 e 255");
} else {
    // Sendo um número inteiro entre 0 e 255 ele verificará a classe.
    if (enderecoIp >= 0 && enderecoIp <= 127) {
        alert(`O primeiro octeto "${enderecoIp}" é de um IP classe A`);
    } else if (enderecoIp >=128 && enderecoIp <= 191) {
        alert(`O primeiro octeto "${enderecoIp}" é de um IP classe B`);
    } else if (enderecoIp >=192 && enderecoIp <= 223) {
        alert(`O primeiro octeto "${enderecoIp}" é de um IP classe C`);
    } else if (enderecoIp >=224 && enderecoIp <= 239) {
        alert(`O primeiro octeto "${enderecoIp}" é de um IP classe D`);
    } else {
        alert(`O primeiro octeto "${enderecoIp}" é de um IP classe E`);
    }
}


