let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 16: Grupo - Contador dinâmico";

/*

Exercício 16 Grupo - Contador dinâmico

No arquivo script.js, siga as etapas abaixo:

Crie um programa que:
A cada iteração, incremente uma variável chamada “contador”.
Inicie com o valor 0 (zero).
A cada iteração, o usuário deve ser questionado:
"Deseja continuar incrementando o contador?"
Caso o usuário digite “Não" finalize o laço de repetição 
imediatamente e mostre o valor final do contador, através de um “alert”.

Observações:

Utilize uma estrutura de repetição (while ou for).
Utilize console.log para exibir o valor do contador a cada iteração.
O valor do incremento deve ser informado pelo usuário, no início do programa através de um prompt, onde:
O número precisa estar entre 1 e 10 (necessário validar).
Se o incremento informado pelo usuário for o número 2, a cada iteração, o contador será incrementado em 2.

*/



//Variaveis iniciais
const repeticoes = 50;
let contador = 0;
let incremento;

validar()

//Função com recursão para validação dos dados
function validar(){
    
    //Entrada do dado do usuario com validação
    incremento = prompt(`Digite um valor entre 1 e 10.\nEste será incrementado ${repeticoes} vezes.`);
    if(incremento === null){
        alert("Programa encerrado pelo usuário");
        return 0;
    }
    
    //Remover espaços vazios
    incremento = incremento.trim();
    if(incremento === "" || isNaN(incremento) || incremento % 1 !== 0){
        alert("Digite um número inteiro válido");
        return validar();
    }
    //Converter a string em numero inteiro na base 10 (pra evitar algum bug, achei interessante).
    incremento = parseInt(incremento, 10);
    
    //Verifica se está entre 1 e 10
    if(incremento > 10 || incremento < 1){
        alert("Digite um valor entre 1 e 10.");
        return validar();
    }
    incrementar();
}

//Função com laço for para incrementar 50 vezes a partir de 0 o valor de incremento que o usuário passou. 
function incrementar() {
for(let i=0; i < repeticoes; i++){
    contador = contador + incremento;
    //Exibir no console cada iteração 
    console.log(`Iteração ${i + 1}: ${contador}`);
    consulta = prompt(`${i + 1}ª iteração: valor ${contador}\nDeseja continuar incrementando o contador?\n  Digite (N) ou (Não) para encerrar.\n  OK ou Enter para continuar.`);
    if(consulta === null){
        alert("Programa encerrado pelo usuário");
        return 0;
    }
    consulta = consulta.toUpperCase();
    if(consulta === "N" || consulta === "NAO" || consulta === "NÃO"){
        alert(`Programa encerrado na ${i + 1}ª iteração.\nResultando total é: ${contador}`);
        return 0;
    }
}

//Exibir resultado no console
alert(`O valor ${incremento} de incremento tem ${repeticoes} repetições totalizando em: ${contador}`);

}
