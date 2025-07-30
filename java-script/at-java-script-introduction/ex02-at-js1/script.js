/*
----------------------------------------------------------------
Exercicio 2 - Gerador de Mensagem Personalizada
----------------------------------------------------------------

- Obtenha, usando prompt, o nome do usuário, a sua idade e a cidade onde mora.
- Gere uma mensagem personalizada no formato:

    "Olá, [nome]! Você tem [idade] anos e mora em [cidade]."

*/

//Entrada de dados
let usuarioNome = prompt("Olá, digite seu nome");
let usuarioIdade = prompt("Agora me informe a sua idade");
let usuarioCidade = prompt("Por fim, me informe a cidade onde mora.");
let validador = true;

console.log(usuarioIdade);

if (!usuarioNome || !isNaN(Number(usuarioNome))) {
    alert("Digite um nome válido");
    validador = false
}else if (!usuarioIdade || usuarioIdade < 0 || isNaN(Number(usuarioIdade))) {
    alert("Digite uma idade válida");
    validador = false
} else if (!usuarioCidade || !isNaN(Number(usuarioCidade))) {
    alert("Digite uma cidade válida");
    validador = false
} else {
    if (validador) {
        alert(`Olá, ${usuarioNome}! Você tem ${usuarioIdade} anos e mora em ${usuarioCidade}.`)
    }
}

