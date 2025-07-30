/*

DR2-TP1.15

Siga as etapas abaixo:

Altere somente os valores iniciais das variáveis x e y no arquivo script.js.
O resultado deve mostrar o número 20 no alert.
Observações:

Não adicione novas linhas de código.

Como resolvi -----------------------------------------------------------------------------------------------------------------

Ressucitei minha matemática (que já não era muito boa), apliquei uma equação linear, sendo:

Tenho resultado que é 20 e preciso tratar uma lógica onde tenho 2 incógnitas (x e y) com um resultado Z (vou ignorar), este valor z será multiplicado por 2 + o valor da incognita X.

Deste modo já tenho a expressão:

(x + y)*2 + x = 20
(2x + 2y) + x = 20
3x + 2y = 20

Agora preciso descobrir o valor do numero que o tríplo + o dobro do outro dê 20, pela lógica da expressão o x precisa ser menor, entao:

3(2) + (2y) = 20
6 + 2y = 20
2y = 20 - 6
2y = 14
y = 14/2
y = 7

*/

let x = 2;
let y = 7;
//altere somente as variáveis x e y
let z = x + y;

let resultado = z * 2 + x;
alert(resultado); // Deve exibir 20.
