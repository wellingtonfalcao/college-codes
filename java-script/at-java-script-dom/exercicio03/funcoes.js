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