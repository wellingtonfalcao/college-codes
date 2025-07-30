// Crie uma aplicação que apresente para o usuário, um passo a passo para fazer um café. No arquivo script.js, siga as etapas abaixo:

// Utilize o switch, para resolver o exercício.
// Permita que o usuário escolha o passo, que deseja receber as instruções. 
// Por exemplo: Supondo que haja 10 passos para o processo, que ele possa escolher ver apenas do passo informado em diante.
// Considere que o café deverá ainda ser torrado e moído pela máquina de café.


//Entrada de dados
let prepararCafe = prompt(`
(1) Escolha o grão de café
(2) Selecione o nível de torra
(3) Selecione o grau de moagem
(3) Selecione o método de filtragem
(4) Selecione a proporção cafe/água
(5) Selecione a pressão da agua
(6) Selecione a temperatura da água
(7) Selecione a quantidade de água
(8) Selecione o timer ou fazer agora
(9) Preparando o Café
(10) Remova o recipiente
`);

//Selecionar um case de acordo com o número digitado no prompt
switch (Number(prepararCafe)) {
    case 1: 
        passo1 = "(1) Escolha o grão de café";
        alert(passo1);
    case 2: 
        passo2 = "(2) Selecione o nível de torra";
        alert(passo2);
    case 3: 
        passo3 = "(3) Selecione o grau de moagem";
        alert(passo3);
    case 4:
        passo4 = "(4) Selecione a proporção cafe/água";
        alert(passo4);     
    case 5:
        passo5 = "(5) Selecione a pressão da agua";
        alert(passo5);
    case 6:
        passo6 = "(6) Selecione a temperatura da água";
        alert(passo6);
    case 7:
        passo7 = "(7) Selecione a quantidade de água";
        alert(passo7);
    case 8:
        passo8 = "(8) Selecione o timer ou fazer agora";
        alert(passo8);
    case 9:
        passo9 = "(9) Preparando o Café";
        alert(passo9);
    case 10:
        passo10 = "(10) Remova o recipiente";
        alert(passo10);
    default:
        alert("Digite um valor válido entre 1 e 10");
        break;      
}