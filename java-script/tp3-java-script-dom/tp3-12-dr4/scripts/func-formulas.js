//------------------------FUNÇÕES DE FORMULAS---------------------------------

//Formula de fibonacci
export function fibonacci(numero){
    
    let sequencia = [0,1];

    //Iterar a partir do indice 2 o indice -1 e -2
    for(let i=2; i < numero; i++){
        sequencia[i] = sequencia[i-1] + sequencia[i-2];
    }
    console.log(sequencia);
}  