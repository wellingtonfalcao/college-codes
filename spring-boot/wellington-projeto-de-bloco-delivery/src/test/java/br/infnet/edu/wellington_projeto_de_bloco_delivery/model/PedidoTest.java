package br.infnet.edu.wellington_projeto_de_bloco_delivery.model;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class PedidoTest {

    private Pedido pedido;
    private ItemPedido item1;
    private ItemPedido item2;

    @BeforeEach
    void setUp() {
        item1 = new ItemPedido();
        item1.setProdutoId(1);
        item1.setQuantidade(2);
        item1.setPrecoUnitario(25.0);

        item2 = new ItemPedido();
        item2.setProdutoId(2);
        item2.setQuantidade(1);
        item2.setPrecoUnitario(15.0);

        pedido = new Pedido();
        pedido.setItens(Arrays.asList(item1, item2));
    }

    @Test
    void deveCalcularTotalCorretamente() {
        // Act
        pedido.calcularTotal();

        // Assert
        assertEquals(65.0, pedido.getPrecoTotal()); // 2*25 + 1*15 = 65
    }

    @Test
    void deveCalcularTotalZeroParaListaVazia() {
        // Arrange
        pedido.setItens(List.of());

        // Act
        pedido.calcularTotal();

        // Assert
        assertEquals(0.0, pedido.getPrecoTotal());
    }

    @Test
    void deveCalcularTotalCorretamenteComItensDePrecoZero() {
        // Arrange
        ItemPedido itemZero = new ItemPedido();
        itemZero.setProdutoId(3);
        itemZero.setQuantidade(2);
        itemZero.setPrecoUnitario(0.0);

        pedido.setItens(Arrays.asList(itemZero));

        // Act
        pedido.calcularTotal();

        // Assert
        assertEquals(0.0, pedido.getPrecoTotal());
    }

    @Test
    void deveManterItensAposCalcularTotal() {
        // Arrange
        int tamanhoOriginal = pedido.getItens().size();
    }
}