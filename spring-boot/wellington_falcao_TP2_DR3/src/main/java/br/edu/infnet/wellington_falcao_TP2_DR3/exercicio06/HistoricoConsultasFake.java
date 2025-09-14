package br.edu.infnet.wellington_falcao_TP2_DR3.exercicio06;

import java.util.ArrayList;
import java.util.List;

public class HistoricoConsultasFake implements HistoricoConsultas {

    private final List<String> consultas = new ArrayList<>();

    @Override
    public void registrarConsulta(Paciente paciente, double valorConsulta, double valorReembolso) {
        String registro = String.format(
                "Paciente: %s | Consulta: %.2f | Reembolso: %.2f",
                paciente.getNome(), valorConsulta, valorReembolso
        );
        consultas.add(registro);
    }

    @Override
    public List<String> listarConsultas() {
        return new ArrayList<>(consultas); // cópia defensiva
    }
}