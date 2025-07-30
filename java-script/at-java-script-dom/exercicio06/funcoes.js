// ------------- BIBLIOTECA DE FUNCOES ---------------------------------

//Função que retorna um novo array com todos os itens em caixa baixa
export function transformarCaixaBaixa (array) {
  let caixaBaixa = [];
  array.map((frutaAtual) => {
    caixaBaixa.push(frutaAtual.toLowerCase());
  })
  return caixaBaixa;
}

//Função que retorna um novo array com remoção de itens identicos duplicados
export function removerRepetidos (array) {
  return [...new Set(array)]
}


//Função que recebe um ano e verifica se é bissesto ou não. Retorna um booleano 
export function anoBissexto (numero) {
  return (numero % 4 === 0  && numero % 100 !== 0) || (numero % 400 === 0);
}

export function anosBissextos (array) {
let anos = [];
array.map( ano => {
  if(anoBissexto(ano))
  anos.push(ano)
})
return anos;
}

export function tabuada(){
    tabuada = [];
    for(let i=1; i <= 10; i++){
      for(let j=1; j <= 10; j++){
        tabuada.push(`${i} X ${j} = ${i * j}`);
      }
    }
    return tabuada;
  }

//Função que retorna uma quantidade n de fibonacci
export function fibonacci(numero){
    
  let sequencia = [0,1];

  //Iterar a partir do indice 2 o indice -1 e -2
  for(let i=2; i < numero; i++){
      sequencia[i] = sequencia[i-1] + sequencia[i-2];
  }
  return sequencia
}  