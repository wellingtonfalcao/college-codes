package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class CepForaCoberturaException extends RuntimeException {

    public CepForaCoberturaException(String message) {
        super(message);
    }

    public CepForaCoberturaException(String cep, String areaCobertura) {
        super(String.format(
                "CEP %s fora da área de entrega. Atendemos apenas %s.",
                cep, areaCobertura
        ));
    }

    public CepForaCoberturaException(String cep, String areaCobertura, String detalhes) {
        super(String.format(
                "CEP %s fora da área de entrega. Atendemos apenas %s. %s",
                cep, areaCobertura, detalhes
        ));
    }
}