package br.infnet.edu.wellington_projeto_de_bloco_delivery.model;

import java.time.LocalDateTime;
import java.util.List;

public class Pedido {
    private int id;
    private int usuarioId;
    private double precoTotal;
    private StatusPedido status;
    private LocalDateTime dataPedido;
    private List<ItemPedido> itens;
    private String cep; // Adicionado para verificação de CEP
    private String codigoProtocolo; // Adicionado para RF06

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(int usuarioId) {
        this.usuarioId = usuarioId;
    }

    public double getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(double precoTotal) {
        this.precoTotal = precoTotal;
    }

    public StatusPedido getStatus() {
        return status;
    }

    public void setStatus(StatusPedido status) {
        this.status = status;
    }

    public LocalDateTime getDataPedido() {
        return dataPedido;
    }

    public void setDataPedido(LocalDateTime dataPedido) {
        this.dataPedido = dataPedido;
    }

    public List<ItemPedido> getItens() {
        return itens;
    }

    public void setItens(List<ItemPedido> itens) {
        this.itens = itens;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getCodigoProtocolo() {
        return codigoProtocolo;
    }

    public void setCodigoProtocolo(String codigoProtocolo) {
        this.codigoProtocolo = codigoProtocolo;
    }

    public void calcularTotal() {
        this.precoTotal = 0.0;
        if (itens != null) {
            for (ItemPedido item : itens) {
                this.precoTotal += item.getPrecoUnitario() * item.getQuantidade();
            }
        }
    }
}
