package tp1.wellingtonfalcao.teste;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import tp1.wellingtonfalcao.teste.main.domain.ScientificCalculator;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class ScientificCalculatorTest {

    private ScientificCalculator calc;

    @BeforeEach
    void instanciarCalculadora() {
        calc = new ScientificCalculator();
    }
    @Test
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
    void deveLancarExcecao_QuandoNumeroNegativo_EntaoRetornarIllegalArgumentException() {

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
    void deveLancarExcecao_QuandoDivisorForZero_EntaoRetornarIllegalArgumentException() {

        //Dado - Setup
        double numero1 = 10;
        double numero2 = 0;
        String msgEsperada = "Division by zero";

        //Quando - Execution (não precisa de retorno)
        IllegalArgumentException excecaoLancada = assertThrows(IllegalArgumentException.class, () -> calc.divide(numero1, numero2),
                "Deveria lançar um IllegalArgumentException caso o divisor for zero ");

        //Então - Assertion
        assertEquals(msgEsperada, excecaoLancada.getMessage(), "A mensagem da exception está incorreta!");
    }
}
