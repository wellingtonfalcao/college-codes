//------------------------FUNÇÕES DE RANDOMIZAÇÃO---------------------------------

/**
 * Gera uma quantidade específica de números aleatórios únicos entre 1 e 60.
 * @param {number} quantidade -> A quantidade de números aleatórios a serem gerados.
 * @param {array} lista -> O array onde os números gerados serão armazenados.
 * @returns {array} -> Retorna o array preenchido com os números aleatórios.
 */
export function gerarNumeros(quantidade, lista){
    while(lista.length < quantidade){
        let numero = Math.ceil(Math.random() * 60);
        if(!lista.includes(numero)){ //Se não é repetido
            lista.push(numero);
        }
    }
    return lista
}