//Validar strings menores que "n"
function minLength(valor, tamanho) {
    if(valor.length < tamanho){
        return false;
    } 
    return true;
}


let maxLength = (valor, tamanho) => {
    if(valor.length > tamanho){
        return false;
    }
    return true;
}

