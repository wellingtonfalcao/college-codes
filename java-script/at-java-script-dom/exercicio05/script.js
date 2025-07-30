let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 5: Tabuada";

/*

5 Tabuada

Enunciado: Crie uma página com um programa para mostrar a tabuada de 1 a 10. Exiba o resultado em uma página HTML.

Observações:

Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array gerado.

*/
window.addEventListener("load", () => {
  
  function tabuada(){
    tabuada = [];
    for(let i=1; i <= 10; i++){
      for(let j=1; j <= 10; j++){
        tabuada.push(`${i} X ${j} = ${i * j}`);
      }
    }
    return tabuada;
  }

  tabuada = tabuada();
  
  document.write(tabuada.join("<br>"));
  
});

