let tituloHTML = document.querySelector("#title");
tituloHTML.textContent = "Questao 3: Encontrar anos bissextos em um array";

import { anosBissextos } from "./funcoes.js";

/*

3 Encontrar anos bissextos em um array

Enunciado: Crie uma página com um programa JavaScript para encontrar os anos bissextos em um determinado intervalo de anos. 

Observações:

Crie um array com pelo menos 5 elementos representando anos.
Use “document.write” para mostrar as mensagens no próprio HTML de saída: mostre o array original e a sua resposta.
Crie a função de verificação de ano bissexto em uma biblioteca apropriada.
Teste o seu programa com cenários diferentes.
Considerações:

O array original poderá ser alterado para testar outros cenários de execução.
Pelo menos 1 ano do array deve ser bissexto.

*/

window.addEventListener("load", () => {
  
  const listaAnos = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024, 2025
  ];

  const bissextos = anosBissextos(listaAnos).join(", ");

  document.write(`<h3>Entre ${listaAnos[0]} e ${listaAnos[listaAnos.length - 1]} os anos bissextos são:</h3>
    <p>${bissextos}.</p><h3>O array original de anos é:</h3><p>${listaAnos.join(", ")}.</p>`);

});
