package br.infnet.edu.wellington_projeto_de_bloco_delivery.repository;

import br.infnet.edu.wellington_projeto_de_bloco_delivery.model.Pedido;
import java.util.List;
import java.util.Optional;

public interface PedidoRepository {
    Pedido salvar(Pedido pedido);
    Optional<Pedido> buscarPorId(int id);
    List<Pedido> buscarPorUsuarioId(int usuarioId);
    List<Pedido> listarTodos();
}