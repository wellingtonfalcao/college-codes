package br.infnet.edu.wellington_projeto_de_bloco_delivery.repository;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.Pedido;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;

@Repository
public class PedidoRepositoryImpl implements PedidoRepository {

    private final List<Pedido> pedidos = new ArrayList<>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    @Override
    public Pedido salvar(Pedido pedido) {
        if (pedido.getId() == 0) {
            pedido.setId(nextId.getAndIncrement());
        } else {
            // Remove pedido existente se estiver atualizando
            pedidos.removeIf(p -> p.getId() == pedido.getId());
        }
        pedidos.add(pedido);
        return pedido;
    }

    @Override
    public Optional<Pedido> buscarPorId(int id) {
        for (Pedido pedido : pedidos) {
            if (pedido.getId() == id) {
                return Optional.of(pedido);
            }
        }
        return Optional.empty();
    }

    @Override
    public List<Pedido> buscarPorUsuarioId(int usuarioId) {
        List<Pedido> pedidosDoUsuario = new ArrayList<>();
        for (Pedido pedido : pedidos) {
            if (pedido.getUsuarioId() == usuarioId) {
                pedidosDoUsuario.add(pedido);
            }
        }
        return pedidosDoUsuario;
    }

    @Override
    public List<Pedido> listarTodos() {
        return new ArrayList<>(pedidos);
    }
}