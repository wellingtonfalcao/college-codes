package tp1.wellingtonfalcao.teste;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import tp1.wellingtonfalcao.teste.main.domain.ScientificCalculator;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TesteApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void testAddition() {
		ScientificCalculator calc = new ScientificCalculator();
		double resultado = calc.add(5,5);
		assertEquals(10, resultado);
	}

	@Test
	void deveSubtrair_QuandoNumeros_EntaoRetornarSubtracaoCorreta() {
		//Dado - Setup
		ScientificCalculator calc = new ScientificCalculator();
		double numero1 = 10;
		double numero2 = 5;
		double resultadoEsperado = 5;

		//Quando - Execution
		double resulSubt = calc.subtract(10,5);

		//Então - Assertion
		assertEquals(resultadoEsperado, resulSubt);
	}



}
