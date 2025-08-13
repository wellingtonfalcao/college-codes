package tp1.wellingtonfalcao.teste;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import tp1.wellingtonfalcao.teste.main.domain.ScientificCalculator;

import static org.junit.jupiter.api.Assertions.*;

public class ScientificCalculatorTest {

    private ScientificCalculator calc;

    @BeforeEach
    void instanciarCalculadora() {
        calc = new ScientificCalculator();
    }
    @Test
    @DisplayName("Deve realizar a soma de 2 números corretamente")
    void deveSomar_QuandoNumeros_EntaoRetornarSomaCorreta() {

        //Dado - Setup
        double numero1 = 5;
        double numero2 = 5;

        //Quando - Execution
        double resultado = calc.add(numero1,numero2);

        //Então - Assertion
        assertEquals(10, resultado);
    }

    @Test
    @DisplayName("Deve realizar a subtração de 2 números corretamente")
    void deveSubtrair_QuandoNumeros_EntaoRetornarSubtracaoCorreta() {

        //Dado - Setup
        double numero1 = 10;
        double numero2 = 5;
        double resultadoEsperado = 5;

        //Quando - Execution
        double resulSubt = calc.subtract(numero1,numero2);

        //Então - Assertion
        assertEquals(resultadoEsperado, resulSubt);
    }

    @Test
    @DisplayName("Deve tirar a raiz quadrada de um número positivo corretamente")
    void deveTirarRaizQuadrada_QuandoNumero_EntaoRetornarRaizQuadradaCorreta() {

        //Dado - Setup
        double numero = 9;
        double resultadoEsperado = 3;

        //Quando - Execution
        double resulSquareRoot = calc.squareRoot(numero);

        //Então - Assertion
        assertEquals(resultadoEsperado, resulSquareRoot);
    }

    @Test
    @DisplayName("Deve lançar uma exceção caso o número parar tirar raiz quadrada seja negativo")
    void deveLancarExcecaodaRaizQuadrada_QuandoNumeroNegativo_EntaoRetornarIllegalArgumentException() {

        //Dado - Setup
        double numero = -70;
        String msgEsperada = "Negative number";

        //Quando - Execution (não precisa de retorno)
        IllegalArgumentException excecaoLancada = assertThrows(IllegalArgumentException.class, () -> calc.squareRoot(numero),
                "Deveria lançar um IllegalArgumentException para o calculo de raiz quadrada com número negativo!");

        //Então - Assertion
        assertEquals(msgEsperada, excecaoLancada.getMessage(), "A mensagem da exception está incorreta!");
    }

    @Test
    @DisplayName("Deve lançar uma exceção caso o divisor for zero")
    void deveLancarExcecao_QuandoDivisorForZero_EntaoRetornarIllegalArgumentException() {

        //Dado - Setup
        double numero1 = 10;
        double numero2 = 0;
        String msgEsperada = "Division by zero";

        //Quando - Execution (não precisa de retorno)
        IllegalArgumentException excecaoLancada = assertThrowsExactly(IllegalArgumentException.class, () -> calc.divide(numero1, numero2),
                "Deveria lançar um IllegalArgumentException caso o divisor for zero ");

        //Então - Assertion
        assertEquals(msgEsperada, excecaoLancada.getMessage(), "A mensagem da exception está incorreta!");
    }

//    ## 8. Combinando múltiplas entradas (log e seno)
//
//    - Implemente testes para os métodos `log` e `sin`.
//    - Garanta a precisão dos resultados esperados para valores positivos comuns.

    @Test
    @DisplayName("Deve calcular o log de um número positivo corretamente.")
    void deveCalcularLog_QuandoNumeroPositivo_EntaoRetornarValorCorreto() {
        //Dado - Setup
        double numero = 8;
        double resultadoEsperado = 2.079;

        //Quando - Execution
        double resultadoAtual = calc.log(numero);

        //Então - Assertion
        assertEquals(resultadoEsperado, resultadoAtual, 0.001, "O Logaritmo não está correto");
    }

    @ParameterizedTest(name = "O seno de {0} deve ser {1}.")
    @CsvSource({
            "0.0,0.0",
            "30.0,0.5",
            "90.0,1",
            "180.0,0",
    })
    @DisplayName("Deve calcular o valor correto do seno para alguns ângulos.")
    void deveCalcular_QuandoAngulos_EntaoRetornarValorCorreto(double grau, double seno) {
        //Dado (No CsvSource)

        //Quando
        double novoSeno = calc.sin(grau);

        //Então
        assertEquals(seno, novoSeno, 0.01, "O seno de %.2f deveria ser %.2f".formatted(grau, seno, novoSeno));
    }

}
