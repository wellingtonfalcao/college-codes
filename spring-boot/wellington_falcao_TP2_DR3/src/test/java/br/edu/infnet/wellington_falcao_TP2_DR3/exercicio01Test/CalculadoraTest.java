package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio01Test;

import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio01.Calculadora;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTest {
    Calculadora calc = new Calculadora();

    @Test
    @DisplayName("Deve receber dois valores 'double', calcular reembolso e retornar um valor válido")
    public void deveReceberDoisValoresDouble_CalcularReembolso_EntaoRetonarValorValido (){
        assertEquals(140, calc.calcularReembolso(200,70));
    }
}
