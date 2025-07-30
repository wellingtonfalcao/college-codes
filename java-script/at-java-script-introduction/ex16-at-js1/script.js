/*
----------------------------------------------------------------
Exercicio 16 -  Calculadora de Diferença entre Datas
----------------------------------------------------------------

Crie um formulário HTML com dois campos de data (input type="date").
Quando o usuário selecionar as duas datas e clicar em um botão "Calcular", 
crie uma função JavaScript que calcule a diferença em dias entre as duas datas usando o objeto Date.
Exiba o resultado (número de dias de diferença) na página HTML.
Adicione uma validação que verifique se as datas inseridas são válidas e se a data final é 
maior que a data inicial. Se não forem, exiba uma mensagem de erro no HTML.

*/

//Função de cálculo da diferença entre os dias
function calcular () {

    // Entrada dos valores selecionados de data e convertendo a string do input para objeto Date().
    const dataInicial = new Date (document.getElementById("dataInicial").value);
    const dataFinal = new Date (document.getElementById("dataFinal").value);

    // Atribui o elemento span em uma variável para exibir erro
    let erroDataInicial = document.getElementById("erroDataInicial");
    let erroDataFinal = document.getElementById("erroDataFinal");
    let resultado = document.getElementById("resultado");

    // Limpar os valores da tentativa anterior ao executar a função novamente;
    dataInicial.innerHTML = "";
    dataFinal.innerHTML = "";
    resultado.innerHTML = "";
    
    // Conversão dos millisegundos para dias
    let diferencaDias = Math.floor((dataFinal - dataInicial) / (1000 * 60 * 60 * 24));

    //Variável que retorna false caso um ou mais campos forem inválidos
    let camposValidados = true;

    // Inicio da validação, verifica se os campos estão default e se a data inicial é maior que a final.
    if (dataInicial >= dataFinal) {
        erroDataInicial.innerHTML = "Data inicial precisa ser menor que a data final";
        camposValidados = false;
    
    } else if (isNaN(dataInicial.getTime())){
        erroDataInicial.innerHTML = "Digite uma data inicial válida";
        camposValidados = false
    } else if (isNaN(dataFinal.getTime())) {
        erroDataFinal.innerHTML = "Digite uma data final válida";
        camposValidados = false
    } else {

        // Caso nenhum campo tenha retornado false, o programa executa o cálculo.
        if (camposValidados = true) {
            resultado.innerHTML =  `Há ${diferencaDias} dia(s) de diferenças entre as datas`;
        }
    }
}
