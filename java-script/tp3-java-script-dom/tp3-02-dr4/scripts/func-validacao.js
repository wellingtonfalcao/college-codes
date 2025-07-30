//------------------------FUNÇÕES DE VALIDACÃO---------------------------------
//Validar strings menores que "n"
function minLength(valor, tamanho) {
    if(valor.length < tamanho){
        return false;
    } 
    return true;
}

//Validar strings maiores que "n"
let maxLength = (valor, tamanho) => {
    if(valor.length > tamanho){
        return false;
    }
    return true;
}