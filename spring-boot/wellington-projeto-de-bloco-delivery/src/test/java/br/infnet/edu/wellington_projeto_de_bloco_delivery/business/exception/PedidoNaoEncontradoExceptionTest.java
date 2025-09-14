package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.junit.jupiter.api.Assertions.*;

class PedidoNaoEncontradoExceptionTest {

    @Test
    void deveTerResponseStatusNotFound() {
        // Arrange
        ResponseStatus annotation = PedidoNaoEncontradoException.class
                .getAnnotation(ResponseStatus.class);

        // Assert
        assertNotNull(annotation);
        assertEquals(HttpStatus.NOT_FOUND, annotation.value());
    }

    @Test
    void deveCriarExceptionComId() {
        // Act
        PedidoNaoEncontradoException exception = new PedidoNaoEncontradoException(123L);

        // Assert
        assertTrue(exception.getMessage().contains("123"));
    }

    @Test
    void deveCriarExceptionComProtocolo() {
        // Act
        PedidoNaoEncontradoException exception = new PedidoNaoEncontradoException("DEL123");

        // Assert
        assertTrue(exception.getMessage().contains("DEL123"));
    }

    @Test
    void deveCriarExceptionComIdEMensagem() {
        // Act
        PedidoNaoEncontradoException exception = new PedidoNaoEncontradoException(
                123L, "Pedido foi deletado"
        );

        // Assert
        assertTrue(exception.getMessage().contains("123"));
        assertTrue(exception.getMessage().contains("Pedido foi deletado"));
    }
}