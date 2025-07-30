// Um time de e-sports tem duas opções para mascote, o RoboRat e o SuperKeyboard. No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário a quantidade de votos recebida por cada mascote, mais a quantidade de votos inválidos.
// Informe a porcentagem de votos de cada mascote e a porcentagem de votos inválidos.
// Informe também a porcentagem de votos de cada mascote, considerando apenas os votos válidos.
// Informe qual será o novo mascote do time.

//Entrada dos dados
let votosRobotRat = Number(prompt("Digite o total de votos para RobotRat"));
let votosSuperKeyboard = Number(prompt("Digite o total de votos para SuperKeyboard"));
let votosInvalidos = Number(prompt("Digite o total de votos inválidos"));
let totalVotosValidos = votosRobotRat + votosSuperKeyboard;
let totalVotos = totalVotosValidos + votosInvalidos;

if(isNaN(totalVotos) || !Number.isInteger(totalVotos) || votosRobotRat < 0 || votosSuperKeyboard < 0 || votosInvalidos < 0 ) {
    alert("Digite valores numéricos válidos")
} else {
    //Processameto dos dados
    let porcentagemRobotRat = (votosRobotRat / totalVotos) * 100;
    let porcentagemSuperKeyboard = (votosSuperKeyboard / totalVotos) * 100;
    let porcentagemInvalidos = (votosInvalidos / totalVotos) * 100;
    let porcentagemTotal = porcentagemSuperKeyboard + porcentagemRobotRat + porcentagemInvalidos;
    
    let porcentagemRobotRatSemInvalidos = (votosRobotRat / totalVotosValidos) * 100;
    let porcentagemSuperKeyboardSemInvalidos = (votosSuperKeyboard / totalVotosValidos) * 100;
 
    //Validar se as 3 porcentagens de votos somadas resulta em 100%
    if (porcentagemTotal !== 100) {
        alert("Os valores informados são inconsistentes, confira novamente os votos.")
    } else {
        //Saída dos dados
        let stringResultado = (`
        Votos RobotRat: ${votosRobotRat} (${porcentagemRobotRat.toFixed(2)}%)
        Votos SuperKeyboard: ${votosSuperKeyboard} (${porcentagemSuperKeyboard.toFixed(2)}%)
        Votos inválidos: ${votosInvalidos} (${porcentagemInvalidos.toFixed(2)}%)

        Porcentagem dos Válidos
        RobotRat: (${porcentagemRobotRatSemInvalidos.toFixed(2)}%)
        SuperKeyboard: (${porcentagemSuperKeyboardSemInvalidos.toFixed(2)}%)
        
        Total votos válidos: ${totalVotosValidos}
        Total votos: ${totalVotos}
        `);

        //Condicional que informa o campeão ou se houve empate
        if(porcentagemRobotRat > porcentagemSuperKeyboard) {
            alert(`${stringResultado}
        RobotRat é o novo mascote do time!`);
        } else if (porcentagemRobotRat === porcentagemSuperKeyboard) {
            alert(`${stringResultado}
        Houve um empate. Fazer nova votação`);
        } else {
            alert(`${stringResultado}
        SuperKeyboard é o novo mascote do time!`);
        }
    }
}


