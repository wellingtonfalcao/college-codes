// Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. Os endereços no intervalo 
// de 0 a 127 são classe A, de 128 a 191 são classe B, de 192 a 223 são classe C, de 224 a 239 são classe D e a 
// partir de 240 são classe E. Crie um programa que leia o primeiro octeto, 
// no formato de um número inteiro, de um endereço IP e informe a sua classe.

let primeiroOctetoIp = prompt("Digite os primeiro digitos antes de um ponto (octeto) de um endereço IP que lhe informarei a qual classe pertence");

if (!primeiroOctetoIp) {
    alert("Você cancelou ou digitou um valor nulo");
} else {
    primeiroOctetoIp = Number(primeiroOctetoIp.replace(",","."));
    if(isNaN(primeiroOctetoIp) || primeiroOctetoIp < 0 || !Number.isInteger(primeiroOctetoIp)) {
        alert("Digite um valor numérico válido do primeiro octeto do IP.")
    } else if (primeiroOctetoIp <= 127) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é de um IP pertencente a classe A`);
    } else if (primeiroOctetoIp >= 128 && primeiroOctetoIp <= 191) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é de um IP pertencente a classe B`);
    } else if (primeiroOctetoIp >= 192 && primeiroOctetoIp <= 223) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é de um IP pertencente a classe C`);
    } else if (primeiroOctetoIp >= 224 && primeiroOctetoIp <= 239) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é de um IP pertencente a classe D`);
    } else if (primeiroOctetoIp >= 240 && primeiroOctetoIp <= 255) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é de um IP pertencente a classe E`);
    } else if (primeiroOctetoIp > 255) {
        alert(`O primeiro octeto ${primeiroOctetoIp} é um IP inválido`);
    } 
}