let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 8: Lista de Compras - Parte 2";

/* 

Crie uma nova aplicação copiando os códigos da questão anterior e inclua um botão em cada item para excluí-lo. 


Observações:

Crie a função excluir.
Utilize splice para excluir o item da lista.
Utilize template de string para facilitar a criação da linha com o item no HTML.

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
    lista.forEach( (item, index) => {
        btExcluir = `<button onclick="excluirProduto(${index})">Excluir</button>`
        listaHTML.innerHTML += `<li>${item} ${btExcluir}</li>`;
    })
}

