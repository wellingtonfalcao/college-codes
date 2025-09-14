package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.CepForaCoberturaException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.PedidoNaoEncontradoException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.ItemPedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.Pedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.StatusPedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.repository.ItemPedidoRepository;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.repository.PedidoRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.Method;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PedidoServiceTest {

    @Mock
    private PedidoRepository pedidoRepository;

    @Mock
    private ItemPedidoRepository itemPedidoRepository;

    @Mock
    private LogisticaService logisticaService;

    @InjectMocks
    private br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.PedidoService pedidoService;

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
        pedido.setUsuarioId(1);
        pedido.setCep("22000-000");
        pedido.setItens(Arrays.asList(item1, item2));
    }

    @Test
    void deveCriarPedidoComSucesso() {
        // Arrange
        when(logisticaService.verificarCoberturaEntrega(anyString())).thenReturn(true);
        when(pedidoRepository.salvar(any(Pedido.class))).thenAnswer(inv -> {
            Pedido p = inv.getArgument(0);
            p.setId(1);
            return p;
        });
        when(itemPedidoRepository.salvar(any(ItemPedido.class))).thenAnswer(inv -> inv.getArgument(0));

        // Act
        Pedido resultado = pedidoService.criarPedido(pedido);

        // Assert
        assertNotNull(resultado);
        assertEquals(1, resultado.getId());
        assertEquals(65.0, resultado.getPrecoTotal()); // 2*25 + 1*15 = 65
        assertEquals(StatusPedido.PEDIDO_REALIZADO, resultado.getStatus());
        assertNotNull(resultado.getCodigoProtocolo());
        assertTrue(resultado.getCodigoProtocolo().startsWith("DEL"));
        assertNotNull(resultado.getDataPedido());

        verify(pedidoRepository, times(1)).salvar(any(Pedido.class));
        verify(itemPedidoRepository, times(2)).salvar(any(ItemPedido.class));
        verify(logisticaService, times(1)).verificarCoberturaEntrega("22000-000");
    }

    @Test
    void deveLancarCepForaCoberturaException() {
        // Arrange
        pedido.setCep("10000-000");
        doThrow(new CepForaCoberturaException("CEP fora da área"))
                .when(logisticaService).verificarCoberturaEntrega(anyString());

        // Act & Assert
        assertThrows(CepForaCoberturaException.class, () ->
                pedidoService.criarPedido(pedido));

        verify(pedidoRepository, never()).salvar(any(Pedido.class));
    }

    @Test
    void deveBuscarPedidoPorIdComSucesso() {
        // Arrange
        pedido.setId(1);
        when(pedidoRepository.buscarPorId(1)).thenReturn(Optional.of(pedido));
        when(itemPedidoRepository.buscarPorPedidoId(1)).thenReturn(Arrays.asList(item1, item2));

        // Act
        Pedido resultado = pedidoService.buscarPedidoPorId(1);

        // Assert
        assertNotNull(resultado);
        assertEquals(1, resultado.getId());
        assertEquals(2, resultado.getItens().size());
        verify(pedidoRepository, times(1)).buscarPorId(1);
        verify(itemPedidoRepository, times(1)).buscarPorPedidoId(1);
    }

    @Test
    void deveLancarExceptionAoBuscarPedidoInexistente() {
        // Arrange
        when(pedidoRepository.buscarPorId(999)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(PedidoNaoEncontradoException.class, () ->
                pedidoService.buscarPedidoPorId(999));
    }

    @Test
    void deveAtualizarStatusComSucesso() {
        // Arrange
        pedido.setId(1);
        pedido.setStatus(StatusPedido.PEDIDO_REALIZADO);

        when(pedidoRepository.buscarPorId(1)).thenReturn(Optional.of(pedido));
        when(pedidoRepository.salvar(any(Pedido.class))).thenReturn(pedido);

        // Act
        Pedido resultado = pedidoService.atualizarStatus(1, StatusPedido.EM_PREPARO);

        // Assert
        assertEquals(StatusPedido.EM_PREPARO, resultado.getStatus());
        verify(pedidoRepository, times(1)).salvar(pedido);
    }

    @Test
    void deveLancarExceptionAoAtualizarStatusPedidoEntregue() {
        // Arrange
        pedido.setId(1);
        pedido.setStatus(StatusPedido.ENTREGUE);
        when(pedidoRepository.buscarPorId(1)).thenReturn(Optional.of(pedido));

        // Act & Assert
        assertThrows(IllegalStateException.class, () ->
                pedidoService.atualizarStatus(1, StatusPedido.EM_PREPARO));
    }
    /*
    @Test
    void deveRefazerPedidoComSucesso() {
        // Arrange
        pedido.setId(1);

        // ✅ CONFIGURAR ITENS NO PEDIDO MOCKADO
        List<ItemPedido> itensOriginais = new ArrayList<>();

        ItemPedido item1 = new ItemPedido();
        item1.setProdutoId(1);
        item1.setQuantidade(2);
        item1.setPrecoUnitario(10.0);
        itensOriginais.add(item1);

        ItemPedido item2 = new ItemPedido();
        item2.setProdutoId(2);
        item2.setQuantidade(3);
        item2.setPrecoUnitario(15.0);
        itensOriginais.add(item2);

        pedido.setItens(itensOriginais); // ✅ DEFINIR ITENS NO PEDIDO

        when(pedidoRepository.buscarPorId(1)).thenReturn(Optional.of(pedido));
        when(logisticaService.verificarCoberturaEntrega(anyString())).thenReturn(true);
        when(pedidoRepository.salvar(any(Pedido.class))).thenAnswer(inv -> {
            Pedido p = inv.getArgument(0);
            p.setId(2);
            return p;
        });
        when(itemPedidoRepository.salvar(any(ItemPedido.class))).thenAnswer(inv -> inv.getArgument(0));

        // Act
        Pedido resultado = pedidoService.refazerPedido(1);

        // Assert
        assertNotNull(resultado);
        assertEquals(2, resultado.getId());
        assertEquals(65.0, resultado.getPrecoTotal()); // (2*10) + (3*15) = 65
        verify(pedidoRepository, times(1)).salvar(any(Pedido.class));
    }
    */
    @Test
    void deveListarTodosPedidos() {
        // Arrange
        when(pedidoRepository.listarTodos()).thenReturn(Arrays.asList(pedido));
        when(itemPedidoRepository.buscarPorPedidoId(anyInt())).thenReturn(Arrays.asList(item1, item2));

        // Act
        List<Pedido> resultados = pedidoService.listarTodosPedidos();

        // Assert
        assertNotNull(resultados);
        assertEquals(1, resultados.size());
        assertEquals(2, resultados.get(0).getItens().size());
    }

    @Test
    void deveBuscarPedidosPorUsuario() {
        // Arrange
        when(pedidoRepository.buscarPorUsuarioId(1)).thenReturn(Arrays.asList(pedido));
        when(itemPedidoRepository.buscarPorPedidoId(anyInt())).thenReturn(Arrays.asList(item1, item2));

        // Act
        List<Pedido> resultados = pedidoService.buscarPedidosPorUsuario(1);

        // Assert
        assertNotNull(resultados);
        assertEquals(1, resultados.size());
        verify(pedidoRepository, times(1)).buscarPorUsuarioId(1);
    }

    @Test
    void deveGerarCodigoProtocoloUnico() throws Exception {
        // Usando reflexão para acessar o método privado
        Method metodoGerarCodigo = br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.PedidoService.class.getDeclaredMethod("gerarCodigoProtocolo");
        metodoGerarCodigo.setAccessible(true);

        // Act
        String codigo1 = (String) metodoGerarCodigo.invoke(pedidoService);
        String codigo2 = (String) metodoGerarCodigo.invoke(pedidoService);

        // Assert
        assertNotNull(codigo1);
        assertNotNull(codigo2);
        assertTrue(codigo1.startsWith("DEL"));
        assertTrue(codigo2.startsWith("DEL"));
        assertNotEquals(codigo1, codigo2); // Devem ser diferentes
    }
}