package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PedidoNaoEncontradoException extends RuntimeException {

    public PedidoNaoEncontradoException(Long id) {
        super(String.format("Pedido não encontrado com ID: %d", id));
    }

    public PedidoNaoEncontradoException(String codigoProtocolo) {
        super(String.format("Pedido não encontrado com código de protocolo: %s", codigoProtocolo));
    }

    public PedidoNaoEncontradoException(Long id, String message) {
        super(String.format("Pedido não encontrado com ID: %d. %s", id, message));
    }
}
