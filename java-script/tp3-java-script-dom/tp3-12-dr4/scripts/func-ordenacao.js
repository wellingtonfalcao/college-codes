//------------------------FUNÇÕES DE ORDENAÇÃO---------------------------------

//Ordenar valores numéricos em ordem ascendente e retornar um novo array
export function sortNumberAsc(array){
    let novoArray = [...array];
    return novoArray.sort((a, b) => (a - b));
}

//Ordenar valores numéricos em ordem descendente e retornar um novo array
export function sortNumberDesc(array){
    let novoArray = [...array];
    return novoArray.sort((a, b) => (b - a));
}