package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06;

import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.HistoricoConsultas;
import br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06.Paciente;

public class CalculadoraReembolso {

    private final HistoricoConsultas historico;

    public CalculadoraReembolso(HistoricoConsultas historico) {
        this.historico = historico;
    }

    // Percentual direto
    public double calcularReembolso(double valorConsulta, double percentualCobertura, Paciente paciente) {
        if (valorConsulta <= 0 || percentualCobertura <= 0) {
            historico.registrarConsulta(paciente, valorConsulta, 0);
            return 0;
        }

        double reembolso = valorConsulta * (percentualCobertura / 100);
        historico.registrarConsulta(paciente, valorConsulta, reembolso);
        return reembolso;
    }

    // Usei sobrecarga para a interface
    public double calcularReembolso(double valorConsulta, PlanoSaude plano, Paciente paciente) {
        if (valorConsulta <= 0 || plano.getPercentualCobertura() <= 0) {
            historico.registrarConsulta(paciente, valorConsulta, 0);
            return 0;
        }

        double reembolso = valorConsulta * plano.getPercentualCobertura();
        historico.registrarConsulta(paciente, valorConsulta, reembolso);
        return reembolso;
    }
}