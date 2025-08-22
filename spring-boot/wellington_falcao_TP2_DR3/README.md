# Etapas do Desenvolvimento e Testes de Reembolso

## Etapa 1 – Reembolso Básico
Você começará implementando a função mais simples do sistema: calcular o valor a ser reembolsado com base em um valor fixo e percentual de cobertura.  
Escreva um teste para validar que uma consulta de **R$ 200** com **70% de cobertura** resulta em **R$ 140** de reembolso.

---

## Etapa 2 – Casos de Borda
Agora vamos testar se o sistema responde corretamente a situações limites.  
Teste casos em que o **valor da consulta** ou o **percentual de cobertura** sejam iguais a **0 ou 100**.  
Isso ajuda a validar o comportamento básico da função.

---

## Etapa 3 – Teste Isolado em Classe Dedicada
Organize o código criando uma classe chamada **`CalculadoraReembolso`**, onde a lógica do cálculo ficará concentrada.  
Os testes devem verificar apenas essa classe e não depender de mais nada para rodar.

---

## Etapa 4 – Dummy para Paciente
O método de cálculo agora precisa receber também um objeto **Paciente**.  
Como ele ainda não será usado, crie um objeto fictício (*dummy*) apenas para atender à assinatura do método, sem adicionar lógica extra.

---

## Etapa 5 – Fake para Histórico de Consultas
Vamos simular o armazenamento de consultas anteriores com uma estrutura simples em memória.  
Crie uma interface **`HistoricoConsultas`** e uma versão *fake* que guarde os dados em uma lista, permitindo consultar depois.  
Isso ajuda a testar sem depender de banco de dados real.

---

## Etapa 6 – Stub de Plano de Saúde
Implemente uma interface **`PlanoSaude`** com um método que retorna o percentual de cobertura.  
Nos testes, crie *stubs* para simular diferentes planos com percentuais fixos, como **50%** ou **80%**, e garanta que o cálculo responda corretamente.

---

## Etapa 7 – Spy para Auditoria
Agora queremos garantir que o sistema está chamando o serviço de auditoria ao registrar uma consulta.  
Crie uma interface **`Auditoria`** e implemente um *spy* que registra se o método **`registrarConsulta()`** foi chamado durante os testes.

---

## Etapa 8 – Mock para Autorização
As regras mudaram: só se pode reembolsar consultas autorizadas.  
Crie uma interface **`AutorizadorReembolso`** e use **Mockito** para criar um *mock*.  
O *mock* deve simular o comportamento do autorizador e retornar **falso** em um dos testes.  
O sistema, nesses casos, deve lançar uma exceção.

---

## Etapa 9 – Helper para Criação de Consultas
Comece a criar um método auxiliar para gerar objetos **Consulta** com dados padrão.  
Isso vai evitar repetição de código nos testes.  
Aplique esse *helper* em pelo menos três testes já feitos.

---

## Etapa 10 – Comparação com Margem de Erro
Testes com números decimais podem falhar por pequenas diferenças.  
Crie uma função de apoio que compare dois valores com **margem de erro de 0.01**.  
Substitua as comparações diretas por essa função nos testes relevantes.

---

## Etapa 11 – Regras de Teto
A empresa decidiu que o valor máximo de reembolso será **R$ 150 por consulta**.  
Antes de programar, escreva testes que validem esse limite.  
Depois, ajuste a lógica para garantir esse comportamento.

---

## Etapa 12 – Integração com Vários Dublês
Agora combine todos os elementos em um teste mais completo.  
Use um *stub* para **PlanoSaude**, um *mock* para **AutorizadorReembolso** e o *helper* de criação de consultas.  
Simule um cenário completo e valide o funcionamento conjunto dos componentes.

---

# Entregáveis
- Código-fonte **Java completo** com classes de produção e testes.
- **Testes unitários** usando JUnit e Mockito.
- Comentários no código explicando o papel dos testes e dublês.
