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