//let tituloHTML = document.querySelector("#title");
//tituloHTML.textContent = "Exercício 4: - Internationalization (I18n)";

/* 
Exercício 4 Internationalization (I18n)

Crie uma aplicação que carregue um array com objetos formados pelos códigos de 
duas letras dos países e seu nome. Em seguida, liste o conteúdo do array em uma página HTML, com o título: “I18N - Países do Mundo”. 

Observações:

Utilize o objeto Intl.DisplayNames.

*/

// API do JS que 
const siglaEpaises = new Intl.DisplayNames(['pt'], {type: 'region'});
let listaPaises = [];

//2 loops FOR aninhados para me retornar todas as combinações possiveis entre AA e ZZ (usando 65 que é código ASCII do A para conseguir incrementar o caractere);
for(let i = 0; i < 26; i++){
    for(let j = 0; j < 26; j++){
        let codigo = String.fromCharCode(65+i) + String.fromCharCode(65+j);
        let nome = siglaEpaises.of(codigo);
        //console.log(codigo);
        if(codigo !== nome){
            listaPaises.push(`${codigo} - ${nome}`);
        }
    }
}

//Inserir titulo via queryselector
document.querySelector("#title").textContent = "I18N - Países do Mundo";

// Pegar o elemento <ul> pelo ID e inserir uma <li> a cada iteração.
listaPaises.forEach((pais) => {
    document.getElementById("paises").innerHTML += `<li>${pais}</li>`;
});

//Bobeirinha para exibir o total de países
let numPaises = document.createElement("p");
numPaises.innerText = `O total de países é ${listaPaises.length}`;

document.body.appendChild(numPaises);

