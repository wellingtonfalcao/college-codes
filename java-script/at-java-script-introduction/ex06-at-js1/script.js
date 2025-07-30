/*
----------------------------------------------------------------
Exercicio 6 - Jogo de Adivinhação
----------------------------------------------------------------

- Peça ao usuário para adivinhar o número usando prompt.
- Gere um número aleatório entre 1 e 100.
- Exiba mensagens como "Muito alto", "Muito baixo", ou "Correto!" com alert. 

*/

// Entrada de dados 
let numeroUsuario = Number(prompt("Digite um número entre 1 e 100"));
let numeroAleatorio = Math.floor(Math.random() * 100 + 1);


// Validação e processsamento dos dados
if (numeroUsuario < 1 || numeroUsuario > 100 || isNaN(numeroUsuario)) {
    alert("Digite um valor válido entre 1 e 100");
} else {

    //Saída de dados
    if (numeroUsuario === numeroAleatorio) {
        alert(`Correto! Seu número foi ${numeroUsuario} e o aleatório foi ${numeroAleatorio}.`);
    } else if (numeroUsuario > numeroAleatorio) {
        alert(`Muito alto. Seu número foi ${numeroUsuario} e o aleatório foi ${numeroAleatorio}.`);
    } else {
        alert(`Muito baixo. Seu número foi ${numeroUsuario} e o aleatório foi ${numeroAleatorio}.`);
    }
}
