package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio04Test;

import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio04.CalculadoraReembolso;
import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio04.Paciente;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class CalculadoraReembolsoTest {
    private CalculadoraReembolso calc;
    private Paciente dummyPaciente;

    @BeforeEach
    void setUp() {
        calc = new CalculadoraReembolso();
        dummyPaciente = new Paciente("Paciente Dummy");
    }


    @Test
    @DisplayName("Deve calcular reembolso e retornar um valor válido")
    public void deveReceberDoisValoresDouble_CalcularReembolso_EntaoRetonarValorValido (){
        assertEquals(140, calc.calcularReembolso(200,70, dummyPaciente), 0.001);
    }

    @Test
    @DisplayName("Teste quando valor da consulta é igual a 0")
    public void deveRetornarZero_quandoValorConsultaIgualZero() {
        double resultado = calc.calcularReembolso(0, 80, dummyPaciente);
        assertEquals(0, resultado, 0.001, "Valor da consulta deve ser 0");
    }

    @Test
    @DisplayName("Teste quando valor da cobertura é igual a 0")
    public void deveRetornarZero_quandoValorCoberturaIgualZero() {
        double resultado = calc.calcularReembolso(200, 0, dummyPaciente);
        assertEquals(0, resultado, 0.001, "Valor da cobertura deve ser 0");
    }

    @Test
    @DisplayName("Teste quando tanto valor da cobertura quanto consulta forem iguais a 0")
    public void deveRetornarZero_quandoValorConsultaECoberturaIgualZero() {
        double resultado = calc.calcularReembolso(0, 0, dummyPaciente);
        assertEquals(0, resultado, 0.001, "Valor da consulta e cobertura devem ser 0");
    }

    @Test
    @DisplayName("Teste quando tanto valor da cobertura quanto consulta forem iguais a 100")
    public void deveRetornarCEM_quandoValorConsultaECoberturaIgualCEM() {
        double resultado = calc.calcularReembolso(100, 100, dummyPaciente);
        assertEquals(100, resultado, 0.001, "Valor da consulta e cobertura devem ser 100");
    }
}
