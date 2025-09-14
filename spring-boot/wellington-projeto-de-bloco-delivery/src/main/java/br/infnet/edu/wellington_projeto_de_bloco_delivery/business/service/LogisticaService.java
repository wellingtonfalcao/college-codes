package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import org.springframework.stereotype.Service;

@Service
public class LogisticaService {

    public boolean verificarCoberturaEntrega(String cep) {
        if (cep == null || cep.trim().isEmpty()) {
            throw new CepForaCoberturaException("CEP não informado");
        }

        String cepNumerico = cep.replaceAll("[^0-9]", "");

        if (cepNumerico.length() != 8) {
            throw new CepForaCoberturaException("CEP inválido: " + cep);
        }

        // Simulação: CEPs que começam com 22 são cobertos
        boolean cepCoberto = cepNumerico.startsWith("22");

        if (!cepCoberto) {
            throw new CepForaCoberturaException(
                    "CEP " + cep + " fora da área de entrega. Atendemos apenas CEPs da Zona Sul do RJ."
            );
        }

        return true;
    }
}