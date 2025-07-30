let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 7: Lista de Compras - Parte 1";

/* 

Exercício 7: Lista de Compras - Parte 1

Crie uma aplicação com o layout sugerido abaixo que permita ao usuário incluir itens em uma lista de compras.


Observações:

Crie funções incluir e mostrarLista.
Utilize um array para guardar os itens da lista.

*/

let lista = [];

const btAdicionar = document.querySelector("#bt-adicionar");
const inputProduto = document.querySelector("#input-produto");
const listaHTML = document.querySelector("#lista-produtos");

btAdicionar.addEventListener("click", () => {
    adicionarProduto(lista, inputProduto.value);
    mostrarProdutos(lista, listaHTML);
    inputProduto.value = "";
})

function mostrarProdutos(){
    listaHTML.innerHTML = "";
    lista.sort();
    lista.forEach( item => {
        listaHTML.innerHTML += `<li>${item}</li>`;
    })
}



