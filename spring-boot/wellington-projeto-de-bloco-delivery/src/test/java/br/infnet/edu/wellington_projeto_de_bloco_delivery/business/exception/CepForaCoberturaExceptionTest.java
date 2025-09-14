package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import static org.junit.jupiter.api.Assertions.*;

class CepForaCoberturaExceptionTest {

    @Test
    void deveTerResponseStatusBadRequest() {
        // Arrange
        ResponseStatus annotation = CepForaCoberturaException.class
                .getAnnotation(ResponseStatus.class);

        // Assert
        assertNotNull(annotation);
        assertEquals(HttpStatus.BAD_REQUEST, annotation.value());
    }

    @Test
    void deveCriarExceptionComMensagemSimples() {
        // Act
        CepForaCoberturaException exception = new CepForaCoberturaException("Mensagem de teste");

        // Assert
        assertEquals("Mensagem de teste", exception.getMessage());
    }

    @Test
    void deveCriarExceptionComCepEArea() {
        // Act
        CepForaCoberturaException exception = new CepForaCoberturaException(
                "10000-000", "Zona Sul do RJ"
        );

        // Assert
        assertTrue(exception.getMessage().contains("10000-000"));
        assertTrue(exception.getMessage().contains("Zona Sul do RJ"));
    }

    @Test
    void deveCriarExceptionComDetalhes() {
        // Act
        CepForaCoberturaException exception = new CepForaCoberturaException(
                "10000-000", "Zona Sul do RJ", "Tente outro CEP"
        );

        // Assert
        assertTrue(exception.getMessage().contains("10000-000"));
        assertTrue(exception.getMessage().contains("Zona Sul do RJ"));
        assertTrue(exception.getMessage().contains("Tente outro CEP"));
    }
}
