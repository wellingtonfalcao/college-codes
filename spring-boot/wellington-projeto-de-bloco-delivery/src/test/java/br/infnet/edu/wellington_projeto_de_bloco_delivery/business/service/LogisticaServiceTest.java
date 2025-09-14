package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;

class LogisticaServiceTest {

    private LogisticaService logisticaService;

    @BeforeEach
    void setUp() {
        logisticaService = new LogisticaService();
    }

    @ParameterizedTest
    @ValueSource(strings = {"22000-000", "22640-010", "22451-000", "22041011", "22430256"})
    void deveAceitarCepsDaZonaSul(String cep) {
        // Act & Assert
        assertDoesNotThrow(() -> logisticaService.verificarCoberturaEntrega(cep));
        assertTrue(logisticaService.verificarCoberturaEntrega(cep));
    }

    @ParameterizedTest
    @ValueSource(strings = {"10000-000", "01000-000", "30000-000", "40000-000", "50000-000"})
    void deveRejeitarCepsForaDaZonaSul(String cep) {
        // Act & Assert
        CepForaCoberturaException exception = assertThrows(
                CepForaCoberturaException.class,
                () -> logisticaService.verificarCoberturaEntrega(cep)
        );

        assertTrue(exception.getMessage().contains(cep));
        assertTrue(exception.getMessage().contains("Zona Sul do RJ"));
    }

    @Test
    void deveLancarExceptionParaCepNulo() {
        // Act & Assert
        assertThrows(CepForaCoberturaException.class,
                () -> logisticaService.verificarCoberturaEntrega(null));
    }

    @Test
    void deveLancarExceptionParaCepVazio() {
        // Act & Assert
        assertThrows(CepForaCoberturaException.class,
                () -> logisticaService.verificarCoberturaEntrega(""));
    }

    @Test
    void deveLancarExceptionParaCepInvalido() {
        // Act & Assert
        assertThrows(CepForaCoberturaException.class,
                () -> logisticaService.verificarCoberturaEntrega("ABC"));
    }

    @Test
    void deveLancarExceptionParaCepComFormatoInvalido() {
        // Act & Assert
        assertThrows(CepForaCoberturaException.class,
                () -> logisticaService.verificarCoberturaEntrega("22-000"));
    }
}
