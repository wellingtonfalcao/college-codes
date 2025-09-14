package br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.exception.PedidoNaoEncontradoException;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.Pedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.StatusPedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.ItemPedido;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.repository.PedidoRepository;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.repository.ItemPedidoRepository;
import br.infnet.edu.wellington_projeto_de_bloco_delivery.business.service.LogisticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ItemPedidoRepository itemPedidoRepository;

    @Autowired
    private LogisticaService logisticaService;

    public Pedido criarPedido(Pedido pedido) {
        // 1. Validar CEP PRIMEIRO (RF03) - se falhar, nem calcula o total
        logisticaService.verificarCoberturaEntrega(pedido.getCep());

        // 2. Calcular total automaticamente
        pedido.calcularTotal();

        // 3. Gerar código de protocolo único (RF06)
        pedido.setCodigoProtocolo(gerarCodigoProtocolo());

        // 4. Configurar status inicial (RF07)
        pedido.setStatus(StatusPedido.PEDIDO_REALIZADO);
        pedido.setDataPedido(LocalDateTime.now());

        // 5. Salvar pedido
        Pedido pedidoSalvo = pedidoRepository.salvar(pedido);

        // 6. Salvar itens do pedido
        for (ItemPedido item : pedido.getItens()) {
            item.setPedidoId(pedidoSalvo.getId());
            itemPedidoRepository.salvar(item);
        }

        return pedidoSalvo;
    }

    public Pedido buscarPedidoPorId(int id) {
        Pedido pedido = pedidoRepository.buscarPorId(id)
                .orElseThrow(() -> new PedidoNaoEncontradoException((long) id));

        // Buscar itens do pedido
        List<ItemPedido> itens = itemPedidoRepository.buscarPorPedidoId(id);
        pedido.setItens(itens);

        return pedido;
    }

    public List<Pedido> buscarPedidosPorUsuario(int usuarioId) {
        List<Pedido> pedidos = pedidoRepository.buscarPorUsuarioId(usuarioId);

        // Para cada pedido, buscar seus itens
        for (Pedido pedido : pedidos) {
            List<ItemPedido> itens = itemPedidoRepository.buscarPorPedidoId(pedido.getId());
            pedido.setItens(itens);
        }

        return pedidos;
    }

    public Pedido atualizarStatus(int pedidoId, StatusPedido novoStatus) {
        Pedido pedido = buscarPedidoPorId(pedidoId);

        // Validar transição de status
        validarTransicaoStatus(pedido.getStatus(), novoStatus);

        pedido.setStatus(novoStatus);
        return pedidoRepository.salvar(pedido);
    }

    public Pedido refazerPedido(int pedidoIdAntigo) {
        Pedido pedidoAntigo = buscarPedidoPorId(pedidoIdAntigo);

        // Criar novo pedido baseado no anterior (RF08)
        Pedido novoPedido = new Pedido();
        novoPedido.setUsuarioId(pedidoAntigo.getUsuarioId());
        novoPedido.setCep(pedidoAntigo.getCep());

        // Criar NOVOS itens baseados nos itens antigos (não reutilizar a mesma lista)
        List<ItemPedido> novosItens = new ArrayList<>();
        if (pedidoAntigo.getItens() != null) {
            for (ItemPedido itemAntigo : pedidoAntigo.getItens()) {
                ItemPedido novoItem = new ItemPedido();
                novoItem.setProdutoId(itemAntigo.getProdutoId());
                novoItem.setQuantidade(itemAntigo.getQuantidade());
                novoItem.setPrecoUnitario(itemAntigo.getPrecoUnitario());
                novosItens.add(novoItem); // ✅ ADICIONAR À NOVA LISTA
            }
        }

        novoPedido.setItens(novosItens); // ✅ USAR A NOVA LISTA DE ITENS
        return criarPedido(novoPedido);
    }

    public List<Pedido> listarTodosPedidos() {
        List<Pedido> pedidos = pedidoRepository.listarTodos();

        // Para cada pedido, buscar seus itens
        for (Pedido pedido : pedidos) {
            List<ItemPedido> itens = itemPedidoRepository.buscarPorPedidoId(pedido.getId());
            pedido.setItens(itens);
        }

        return pedidos;
    }

    private String gerarCodigoProtocolo() {
        return "DEL" + System.currentTimeMillis() +
                "-" + (int) (Math.random() * 1000);
    }

    private void validarTransicaoStatus(StatusPedido atual, StatusPedido novo) {
        if (atual == StatusPedido.ENTREGUE || atual == StatusPedido.CANCELADO) {
            throw new IllegalStateException(
                    "Pedido no status " + atual + " não pode ser alterado"
            );
        }
    }
}