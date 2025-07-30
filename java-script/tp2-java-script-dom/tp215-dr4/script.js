let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Exercício 15 Grupo - Contador básico";

/*

Exercício 15: Grupo - Contador básico

No arquivo script.js, siga as etapas abaixo:

A cada iteração, incremente uma variável chamada “contador”.
Inicie com o valor 0 (zero) e vá no máximo até 50.

Observações:
Utilize uma estrutura de repetição (while ou for).
Utilize console.log para exibir o valor do contador a cada iteração.
O valor do incremento deve ser informado pelo usuário, 
no início do programa através de um prompt, onde:
O número precisa estar entre 1 e 10 (necessário validar).
Por exemplo, se o incremento informado pelo usuário for o número 2, 
a cada iteração, o contador será incrementado em 2.

*/



//Variaveis iniciais
const repeticoes = 50;
let contador = 0;
let incremento;

validar()

//Função com recursão para validação dos dados
function validar(){
    
    //Entrada do dado do usuario com validação
    incremento = prompt(`Digite um valor entre 1 e 10, este será incrementado ${repeticoes} vezes.`);
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
}

//Laço for para incrementar 50 vezes a partir de 0 o valor de incremento que o usuário passou . 
for(let i=0; i < repeticoes; i++){
    contador = contador + incremento;
    //Exibir no console cada iteração 
    console.log(`Iteração ${i + 1}: ${contador}`);
}

//Exibir resultado no console
console.log(`O valor ${incremento} de incremento tem ${repeticoes} repetições totalizando em: ${contador}`);