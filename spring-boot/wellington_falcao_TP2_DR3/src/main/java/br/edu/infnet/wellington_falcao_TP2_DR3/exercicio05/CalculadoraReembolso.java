package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio05;

public class CalculadoraReembolso {

    private final HistoricoConsultas historico;

    public CalculadoraReembolso(HistoricoConsultas historico) {
        this.historico = historico;
    }

    public double calcularReembolso(double valorConsulta, double valorCobertura, Paciente paciente) {
        if (valorConsulta <= 0 || valorCobertura <= 0) {
            historico.registrarConsulta(paciente, valorConsulta, 0);
            return 0;
        }

        double reembolso = Math.min(valorConsulta, valorCobertura);
        historico.registrarConsulta(paciente, valorConsulta, reembolso);
        return reembolso;
    }
}

