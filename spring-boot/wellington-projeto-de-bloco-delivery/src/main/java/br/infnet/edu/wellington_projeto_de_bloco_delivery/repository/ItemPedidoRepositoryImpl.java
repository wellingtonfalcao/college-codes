package br.infnet.edu.wellington_projeto_de_bloco_delivery.repository;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.ItemPedido;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Repository
public class ItemPedidoRepositoryImpl implements ItemPedidoRepository {

    private final List<ItemPedido> itens = new ArrayList<>();
    private final AtomicInteger nextId = new AtomicInteger(1);

    @Override
    public ItemPedido salvar(ItemPedido itemPedido) {
        if (itemPedido.getId() == 0) {
            itemPedido.setId(nextId.getAndIncrement());
        }
        itens.add(itemPedido);
        return itemPedido;
    }

    @Override
    public List<ItemPedido> buscarPorPedidoId(int pedidoId) {
        List<ItemPedido> itensDoPedido = new ArrayList<>();
        for (ItemPedido item : itens) {
            if (item.getPedidoId() == pedidoId) {
                itensDoPedido.add(item);
            }
        }
        return itensDoPedido;
    }
}