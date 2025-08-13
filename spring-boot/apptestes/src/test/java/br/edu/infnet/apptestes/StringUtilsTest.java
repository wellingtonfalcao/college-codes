package br.edu.infnet.apptestes;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class StringUtilsTest {

	private StringUtils str;

	@BeforeEach
	void setup() {
		str = new StringUtils();
	}

	@Test
	@DisplayName("Teste para reverter uma String")
	void deveReverter_QuandoStringNormal_EntaoRetornarInvertida() {
		
		//Dado
		String textoOriginal = "Wellington";
		String textoEsperado = "notgnilleW";
		
		//Quando
		String textoAtual = str.reverter(textoOriginal);

		//Então
		assertEquals(textoEsperado, textoAtual, String.format("O %s deveria estar invertido com %s",textoOriginal,textoEsperado));
	}

}
