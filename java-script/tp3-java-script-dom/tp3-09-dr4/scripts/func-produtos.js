//------------------------FUNÇÕES DE PRODUTOS---------------------------------

// Adiciona um valor de produto tipo string a um array fornecido também como argumento
function adicionarProduto(produto, lista) {
    if (produto.trim() !== "") { 
        lista.push(produto);
    }
}

// Mostra uma lista de produtos em um elemento de destino
function mostrarProdutos(lista, destino, tipo = "li") {

    let elementoDestino = document.querySelector(destino);

    // Limpa o conteúdo atual do elemento de destino, senão fica duplicando
    elementoDestino.innerHTML = "";

    lista.forEach(item => {
        
        let elemento = document.createElement(tipo);
        let excluir = document.createElement("button");
        excluir.textContent = "Excluir";
        elemento.textContent = item; 
        elementoDestino.appendChild(elemento); 
        elemento.appendChild(excluir); 
        dasdsadsad
    });
}