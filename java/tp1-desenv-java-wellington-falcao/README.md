# Trabalho Prático – Testes Unitários com JUnit 5

## 1. Configurando o ambiente de testes

- Crie um projeto Java na IDE **IntelliJ IDEA**.
- Adicione corretamente a dependência do **JUnit 5** no `pom.xml` (para projetos Maven) ou `build.gradle` (para Gradle).
- Configure o projeto para executar testes unitários.
- **Tarefa:** Tire um print do ambiente configurado.

**Print do ambiente configurado:**  
![Print Ambiente Configurado](/img/captura-ambiente.png)
---


## 2. Escrevendo o primeiro teste

- Implemente um teste chamado `testAddition` para verificar se o método `add` retorna corretamente a soma de dois números.
- Execute o teste.

**Responda:**
- O que aparece no painel de execução?
- Mostre o código do teste.
- Tire um print do resultado.
- Escreva o que significam os ícones e mensagens exibidas.

**Resposta:**

Fiz o teste do método add() da classe ScientificCalculator. Criei uma classe no diretório de teste chamada ScientificCalculatorTest. 
Nela fiz a annotation @Test para testar o método testeAddition(), criei uma instancia da classe ScientificaCalculator de nome calc.
Chamei o metodo .add em seguida usei o assertEqual para comparar o valor esperado com o valor recebido. 

Executei o teste e passou com sucesso pois o valor esperado era igual ao recebido.

![Print Ambiente Configurado](/img/asser-equals.png)

---

## 3. Aplicando as 4 fases de um teste

- Crie um teste para o método `subtract` utilizando:
  1. **Setup**
  2. **Execution**
  3. **Assertion**
  4. **Teardown** (se aplicável)
- Comente no código onde cada fase está localizada.


---

## 4. Test Fixture com `@BeforeEach`

- Implemente um método anotado com `@BeforeEach` para instanciar o objeto `ScientificCalculator` antes de cada teste.
- Mostre que o mesmo objeto é reaproveitado entre diferentes métodos de teste.

---

## 5. Testando um cenário de sucesso (*Happy Path*)

- Implemente o teste `testSquareRootPositive` para verificar se o cálculo da raiz quadrada de um número positivo está correto.

---

## 6. Testando um cenário patológico (*Corner Case*)

- Implemente o teste `testSquareRootNegative` para verificar se o método `squareRoot` lança uma exceção ao receber um número negativo.
- Utilize `assertThrows`.

---

## 7. Cenário de exceção (divisão por zero)

- Implemente o teste `testDivideByZero` verificando se o método `divide` lança `IllegalArgumentException` ao tentar dividir por zero.

---

## 8. Combinando múltiplas entradas (log e seno)

- Implemente testes para os métodos `log` e `sin`.
- Garanta a precisão dos resultados esperados para valores positivos comuns.

---

## 9. Priorizando testes com base na cobertura e comportamento

**Análise textual:**
- Quais métodos da calculadora merecem mais atenção nos testes?
- Como a cobertura de código pode ajudar a identificar lacunas?

---

## 10. Nomeando testes de forma adequada

- Revise os nomes de todos os testes criados.
- Renomeie aqueles que não seguem boas práticas de clareza e expressividade.
- Explique sua escolha em **dois exemplos**.

---

## 11. Organizando os testes por comportamento

- Crie a classe `ScientificCalculatorTest`.
- Agrupe testes semelhantes (ex.: testes de erro, testes de funções trigonométricas) usando:
  - Comentários
  - Métodos auxiliares

---

**Entrega:**
- Salve o trabalho em PDF nomeado como:
  
