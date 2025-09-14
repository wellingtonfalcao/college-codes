package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06Test;

import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.CalculadoraReembolso;
import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.HistoricoConsultasFake;
import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.Paciente;
import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.PlanoSaude;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;


public class CalculadoraReembolsoTest {
    private CalculadoraReembolso calc;
    private Paciente dummyPaciente;
    private HistoricoConsultasFake historicoFake;

    @BeforeEach
    void setUp() {
        historicoFake = new HistoricoConsultasFake();
        calc = new CalculadoraReembolso(historicoFake);
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

    @Test
    @DisplayName("Deve registrar a consulta no histórico")
    public void deveRegistrarConsultaNoHistorico() {
        calc.calcularReembolso(200, 70, dummyPaciente);

        var consultas = historicoFake.listarConsultas();
        assertEquals(1, consultas.size());
        assertEquals("Paciente: Paciente Dummy | Consulta: 200,00 | Reembolso: 70,00",
                consultas.get(0));
    }

    @Test
    @DisplayName("Deve calcular reembolso com plano 50%")
    void deveCalcularReembolsoComPlano50() {
        PlanoSaude planoStub = new Plano50Stub();
        double resultado = calc.calcularReembolso(200, planoStub, dummyPaciente); // Usa a sobrecarga com PlanoSaude
        assertEquals(100.0, resultado, 0.001);
    }

    @Test
    @DisplayName("Deve calcular reembolso com plano 80%")
    void deveCalcularReembolsoComPlano80() {
        PlanoSaude planoStub = new Plano80Stub();
        double resultado = calc.calcularReembolso(200, planoStub, dummyPaciente); // Usa a sobrecarga com PlanoSaude
        assertEquals(160.0, resultado, 0.001);
    }
}
