package br.edu.infnet.apiwellington;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import br.edu.infnet.apiwellington.model.domain.Vendedor;

public class VendedorTest {

    @ParameterizedTest(name = "Salário: {0}, Bônus: {1}, Ativo: {2} -> Esperado: {3}")
    @CsvSource({
        "1000.0, 500.0, true, 1500.0",
        "10.0, 5.0, false, 0.0"
    })
    void deveCalcularSalarioCorretamente_DadoMuitasEntradas(double salarioInicial, double bonus, boolean ativo, double salarioCalculado) {
        // Dado: configuração inicial do cenário
        Vendedor vendedor = new Vendedor("Elberth", 123, salarioInicial, ativo);

        // Quando: execução da ação a ser testada
        double novoSalario = vendedor.calcularSalario(bonus);

        // Então: verificação do resultado esperado
        assertEquals(salarioCalculado, novoSalario,
            "O salário de um vendedor ativo com bônus deveria ser o salário + bônus.");
    }

    @Test
    void deveCalcularSalarioComBonus_QuandoVendedorAtivo_EntaoRetornaSalarioComBonus() {
        // Dado
        Vendedor vendedor = new Vendedor("Elberth", 123, 1000, true);
        double bonus = 500;
        double salarioCalculado = 1500;

        // Quando
        double novoSalario = vendedor.calcularSalario(bonus);

        // Então
        assertEquals(salarioCalculado, novoSalario,
            "O salário de um vendedor ativo com bônus deveria ser o salário + bônus.");
    }

    @Test
    void retornarZeroParaSalarioVendedorInativo() {
        Vendedor vendedor = new Vendedor("Elberth", 123, 1000, false);

        double novoSalario = vendedor.calcularSalario(500);

        assertEquals(0, novoSalario);
    }
}
