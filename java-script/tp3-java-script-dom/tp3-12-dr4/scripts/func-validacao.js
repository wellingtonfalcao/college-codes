//------------------------FUNÇÕES DE VALIDACÃO---------------------------------
//Validar strings menores que "n"
export function minLength(valor, tamanho) {
    if(valor.length < tamanho){
        return false;
    } 
    return true;
}

//Validar strings maiores que "n"
export let maxLength = (valor, tamanho) => {
    if(valor.length > tamanho){
        return false;
    }
    return true;
}

//Validar se é um número inteiro dentro de um intervalo respectivo
export function numeroIntervalo(min, max, numero){
    return numero >= min && numero <= max ? true : false;
}

