//Função para validar se tem no mínimo 5 caracteres.
function min5Carac() {
    if (entradaString.length >= 5) {
        alert(`"${entradaString}" tem pelo menos 5 caracteres`);
    } 
}

//Função para validar se tem no máximo 15 caracteres.
function max15Carac() {
    if (entradaString.length <= 15) {
        alert(`"${entradaString}" tem no máximo 15 caracteres`);
    } 
}

//Função para validar se tem a palavra "cpf".
function temCPF() {
    if (entradaString.includes("cpf")) {
        alert(`"${entradaString}" tem escrito "cpf"`);
    } 
}