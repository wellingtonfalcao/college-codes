package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06;

import java.util.List;

public interface HistoricoConsultas {
    void registrarConsulta(Paciente paciente, double valorConsulta, double valorReembolso);
    List<String> listarConsultas();
}
