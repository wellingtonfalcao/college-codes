package br.edu.infnet.apiwellington.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;


@Entity
@Table(name = "carrinhos")
public class Carrinho {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private Usuario usuario;
    private LocalDateTime dataCriacao;
    private List<ItemPedido> itens;

    public Carrinho() {
    }

    public Carrinho(int id, Usuario usuario, LocalDateTime dataCriacao, List<ItemPedido> itens) {
        this.id = id;
        this.usuario = usuario;
        this.dataCriacao = dataCriacao;
        this.itens = itens;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public LocalDateTime getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(LocalDateTime dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    public List<ItemPedido> getItens() {
        return itens;
    }

    public void setItens(List<ItemPedido> itens) {
        this.itens = itens;
    }

    @Override
    public String toString() {
        return "Carrinho{" +
                "id=" + id +
                ", usuario=" + usuario +
                ", dataCriacao=" + dataCriacao +
                ", itens=" + itens +
                '}';
    }
}

