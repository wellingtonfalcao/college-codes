let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 7: Filtragem de Nomes por Letra Inicial";

/* 
Exercício 7: Filtragem de Nomes por Letra Inicial

Enunciado: Construa uma aplicação que defina um array com 
10 nomes de escritores. Peça ao usuário para informar uma letra, 
converta-a para maiúscula e retorne uma lista com os escritores 
que têm como inicial a letra informada.

Observações:

Valide sempre as entradas de dados.
Utilize prompt e alert.
Teste o seu código.

*/


//Iniciar a aplicação
localizarEscritores();

function localizarEscritores () {

    const escritores = [
        "Machado de Assis",
        "Clarice Lispector",
        "Jorge Amado",
        "Carlos Drummond de Andrade",
        "Graciliano Ramos",
        "Cecília Meireles",
        "Guimarães Rosa",
        "Lima Barreto",
        "Monteiro Lobato",
        "Rubem Fonseca"
    ];
    
    let letraIniEscritores = [];
    let resultado = [];
    const regexCharEsp = /[!@#$%^&*()_+\-=\[\]{};':"\\¨|,.<>\/?]/;


    //Entrada de dados
    let letraIniUsuario = prompt("Digite uma letra para encontrar autores que começam com ela:");

    //Validação dos dados
    if(letraIniUsuario === null){
        alert("Programa encerrado pelo usuário");
        return 0;
    }
    if(!isNaN(letraIniUsuario)){
        alert("Não são aceitos números ou valor vazio.\nDigite apenas uma letra.");
        return localizarEscritores();
    }
    if(regexCharEsp.test(letraIniUsuario)){
        alert("Não são aceitos caracteres especiais.\nDigite apenas uma letra.");
        return localizarEscritores();
    }
    if(letraIniUsuario.length !== 1){
        alert("Digite apenas uma letra para encontrar os autores");
        return localizarEscritores();
    }
    
    //Processamento dos dados
    letraIniUsuario = letraIniUsuario.toUpperCase();// Mudar pra caixa alta
    for(let i=0; i < escritores.length; i++){
        letraIniEscritores.push(escritores[i].charAt(0));
        if(letraIniEscritores[i] === letraIniUsuario){
            resultado.push(escritores[i]);
        }
    }
    
    //Saída do resultado
    if(resultado.length === 0){
        alert(`Não foram localizados autores com a letra "${letraIniUsuario}".`)
    }else {
        alert(`Os escritores com a letra "${letraIniUsuario}":\n${resultado.join(", ")}`)
    }
    
}

