let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 4: Classificar objetos em um array";

import {} from "./funcoes.js";

/*

4 Classificar objetos em um array

Enunciado: Crie uma página com um programa JavaScript que exiba um array de objetos 
representando obras literárias classificadas por título.

Observações:

Crie um array com pelo menos 5 elementos representando as obras literárias.
Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
O modelo de objeto deve seguir o exemplo: {autor: 'Machado de Assis', título: 'Dom Casmurro', isbn: 1254}.
Dispare um erro caso o array não contenha objetos com o formato solicitado. Use throw e o erro mais adequado 
ao tipo de problema encontrado.Teste o seu programa com cenários diferentes.

Considerações:

*/

window.addEventListener("load", () => {

  const obrasLiterarias = [
    { autor: 'Machado de Assis', titulo: 'Dom Casmurro', isbn: 1254 },
    { autor: 'George Orwell', titulo: '1984', isbn: 3256 },
    { autor: 'J. K. Rowling', titulo: 'Harry Potter e a Pedra Filosofal', isbn: 7852 },
    { autor: 'Gabriel García Márquez', titulo: 'Cem Anos de Solidão', isbn: 9874 },
    { autor: 'Fiódor Dostoiévski', titulo: 'Crime e Castigo', isbn: 6543 },
  ];
  
  let exibirLista = "";
  
  try{

      obrasLiterarias.forEach( obra => {

      if(typeof obra !== "object"){
        throw new TypeError('O array precisa conter uma lista de objetos');
      }

      if(!obra.autor || !obra.titulo || !obra.isbn) {
        throw new TypeError(`O array contém propriedades inválidas. Todos os objetos devem ter autor, título e ISBN.`);
      }

      if (Object.keys(obra).length > 3) {
        throw new TypeError('O array contém objetos com propriedades extras não permitidas.');
      }

      if (typeof obra.isbn !== 'number' || isNaN(obra.isbn)) {
        throw new TypeError('O campo ISBN deve ser um número válido.');
      }

      if (typeof obra.titulo !== 'string' || typeof obra.autor !== 'string') {
        throw new TypeError('Os campos autor e titulo devem ter um valor válido');
      }

    });

    obrasLiterarias.forEach( obra => {
      exibirLista += `<strong>${obra.titulo}</strong> - Autor: ${obra.autor} (ISBN: ${obra.isbn})<br>`;
    });

    document.write(`<h3>O array de objetos obrasLiterarias:</h3><p>${exibirLista}</p>`);
 
  } catch (error) {
   
    document.write(`<strong><p style="color:red">${error.message}</p></strong>`);
    
  } 

});
