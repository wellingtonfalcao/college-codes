/* 

DR2-TP1.16

Os operadores de `pré` e `pós` `incremento` e `decremento` são operadores **unários** em JavaScript, que são usados para `aumentar` ou `diminuir` o valor de uma variável em 1.

INCREMENTO:

- O `pré-incremento` é representado pelo operador `"++"` antes da variável.
- O `pós-incremento` é representado pelo operador `"++"` depois da variável


EXEMPLO:

let x = 5;

console.log(++x); // 6 (pré-incremento)
console.log(x); // 6
console.log(x++); // 5 (pós-incremento)
console.log(x); // 6
D
ECREMENTO:

- O `pré-decremento` é representado pelo operador `"--"` antes da variável
- O `pós-decremento` é representado pelo operador `"--"` depois da variável

EXEMPLO:

let x = 5;
console.log(--x); // 4 (pré-decremento)
console.log(x); // 4
console.log(x--); // 5 (pós-decremento)
console.log(x); // 4

Siga as etapas abaixo:

Modifique os valores das variáveis, no arquivo script.js.
O total no console.log(), deve ser o número 12.
Observações:

 - Não crie outros arquivos, apenas utilize os arquivos presentes no Files.
 - Não modifique os cálculos, somente as atribuições que estão logo abaixo de // Modifique aqui os valores!

*/

/* Resolvendo o exercicio

1 - Parti do resultado 12 que é a soma de 4 variáveis, preciso saber o valor das mesmas:

"numA + numB + numC + numD = 12"

2 - A principio julguei a operação 12 / 4 que é 3 sendo o valor de cada variável, mas o resultado deu 14, significando que minha hipotese preguiçosa não deu certo.

3 - Notei que há uma atribuição entre variaveis através de incrementos e descrementos (que deram nó no meu cérebro) e chegar aos valor 12.

Obs: Não sei se há outros valores possíveis para cada variável. Através da divisão do valor total por 4, cogitei os valores poderiam ser próximos disso (chute).

*/

// Não modifique as sentenças seguintes
let numA;
let numB;
let numC;
let numD;

// Modifique aqui os valores!
numA = 2;
numB = 3;
numC = 2;
numD = 2;

// Não modifique as sentenças seguintes

numA++;
numC = numB--;
numC++;
numA = ++numD;
console.log("A: " + numA);
console.log("B: " + numB);
console.log("C: " + numC);
console.log("D: " + numD);
const resultado = numA + numB + numC + numD;
console.log("Total: " + resultado);
