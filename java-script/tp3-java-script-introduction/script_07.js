// Construa um algoritmo que determine, dada uma idade, se uma pessoa brasileira:

// É obrigada a votar (maiores de 18 até 70 anos).
// Tem voto eletivo (de 16 anos em diante até 18 anos e maiores de 70 anos).
// Não pode votar (menores de 16 anos).

let idadePessoa = prompt("Vamos votar? Digite sua idade.");

if (!idadePessoa) {
    alert("Você cancelou um digitou um valor nulo. Seu voto foi anulado.");
} else {
    idadePessoa = Math.floor(Number(idadePessoa.replace(",",".")));
    if(isNaN(idadePessoa) || idadePessoa < 0) {
        alert("Digite um valor numérico válido da sua idade.")
    } else if (idadePessoa < 16) {
        alert(`Com ${idadePessoa} anos você não pode votar, é menor de 16 anos`);
    } else if (idadePessoa >= 16 && idadePessoa < 18 || idadePessoa > 70) {
        alert(`Com ${idadePessoa} anos você não precisa votar, seu votor é eletivo.`)
    } else {
        alert(`Com ${idadePessoa} anos você é obrigado a votar`);   
     }
}