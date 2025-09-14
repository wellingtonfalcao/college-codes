package br.infnet.edu.wellington_projeto_de_bloco_delivery.repository;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.ItemPedido;
import java.util.List;

public interface ItemPedidoRepository {
    ItemPedido salvar(ItemPedido itemPedido);
    List<ItemPedido> buscarPorPedidoId(int pedidoId);
}
