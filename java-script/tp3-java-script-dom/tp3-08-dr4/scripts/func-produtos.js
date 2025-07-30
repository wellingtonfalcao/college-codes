//------------------------FUNÇÕES DE PRODUTOS---------------------------------


function adicionarProduto(lista, produto){
    if(produto.trim() !== ""){
        lista.push(produto.trim());
    }
}

function excluirProduto(index) {
    lista.splice(index, 1); 
    mostrarProdutos();
}
