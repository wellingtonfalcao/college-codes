//let tituloHTML = document.querySelector("#title");
//tituloHTML.textContent = "Exercício 5: - Nomes Próprios";

/* 
Exercício 5 Nomes Próprios

Crie uma aplicação que contenha uma função que corrija as nome 
de um nome próprio informado, colocando as primeiras letras em maiúsculas corretamente. 
Por exemplo, se o usuário informar “machado de assis” a aplicação exibe “Machado de Assis” corretamente.

Observações:

Utilize prompt e alert.
Empregue uma lista simples de exceções como “de”, “do” ou “da”. Não é preciso esgotar todas as possibilidades.

*/

const autoresBrasileiros = [
    "machado de assis",
    "clarice lispector",
    "jorge amado",
    "guimarães rosa",
    "graciliano ramos",
    "carlos drummond de andrade",
    "manuel bandeira",
    "cecília meireles",
    "monteiro lobato",
    "lygia fagundes telles"
  ];

let autoresCorrigidos = [];

autoresBrasileiros.forEach((autor) => {

    let nome = autor.split(" ");

    let nomeCorrigido = nome.map((palavra) => {
        if(palavra !== "da" && palavra !== "de" && palavra !== "do"){
            // Retorno a palavra filtrada com o caractere indice 0 em caixa alta
            return palavra.charAt(0).toLocaleUpperCase() + palavra.slice(1);
        } else {
            return palavra;
        }
    })
    nomeCorrigido.join(" ");
    autoresCorrigidos.push(nomeCorrigido.join(" "));
});

alert(`Os autores originais são:\n${autoresBrasileiros.join("\n")}`);
alert(`Os autores corrigidos são:\n${autoresCorrigidos.join("\n")}`);