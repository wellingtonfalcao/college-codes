/*
----------------------------------------------------------------
Exercicio 15 -  Formulário Interativo de Inscrição
----------------------------------------------------------------

Crie um formulário HTML com campos para nome, idade e e-mail, além de um botão de envio. Utilize as tags input, e button.
Quando o formulário for submetido, crie uma função JavaScript que valide os campos:
- O nome deve ter pelo menos 3 caracteres.
- A idade deve ser um número positivo.
- O e-mail deve conter "@".
- Exiba uma mensagem no HTML informando se os dados estão corretos ou não.

*/

//Funções de Validação

function validarCampos () {

    // Entrada dos valores inseridos no formulário
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;

    // Atribui o elemento span em uma variável
    let nomeErro = document.getElementById("nomeErro");
    let idadeErro = document.getElementById("idadeErro");
    let emailErro = document.getElementById("emailErro");

    // Limpar os valores da tentativa anterior ao executar a função novamente;
    nomeErro.innerHTML = "";
    idadeErro.innerHTML = "";
    emailErro.innerHTML = "";
    
    //Variável que muda de valor caso um ou mais campos estiverem inválidos
    let camposValidados = true;

    if (nome < 3 | !isNaN(nome)) {
        nomeErro.innerHTML = "Digite um nome com 3 ou mais caracteres";
        camposValidados = false
    } 
    
    if (idade <= 0 || isNaN(idade)) {
        idadeErro.innerHTML = "Digite uma idade com valor numérico positivo";
        camposValidados = false
    }

    if (!email.includes("@")) {
        emailErro.innerHTML = "Digite um e-mail válido";
        camposValidados = false
    }
    
    // caso nenhum campo tenha retornado false, formulário é enviado
    if(camposValidados) {
        campoSucesso.innerHTML = "Formulário enviado com sucesso";
    }

}


