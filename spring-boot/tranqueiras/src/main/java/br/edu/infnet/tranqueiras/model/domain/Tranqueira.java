package br.edu.infnet.tranqueiras.model.domain;

import br.edu.infnet.tranqueiras.auxiliares.Constante;

public class Tranqueira {

    private Integer id;

    private String nome;
    private String descricao;
    private Categoria categoria;
    private Integer quantidade;
    private String localizacao;
    private String fabricante;
    private String modelo;
    private Boolean disponivel;

    public Tranqueira(String nome, String descricao, Categoria categoria, Integer quantidade, String localizacao, String fabricante, String modelo, Boolean disponivel) {
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria != null ? categoria : Categoria.OUTROS;
        this.quantidade = quantidade != null ? quantidade : Constante.QNT_MINIMA;
        this.localizacao = localizacao;
        this.fabricante = fabricante != null ? fabricante : Constante.FABRICANTE_GEN;
        this.modelo = modelo != null ? modelo : Constante.MODELO_ND;
        this.disponivel = disponivel != null ? disponivel : true;
    }

    public Tranqueira(String nome, String localizacao) {
        this();
        this.setNome(nome);
        this.localizacao = localizacao;
    }

    public Tranqueira() {
        this.categoria = Categoria.OUTROS;
        this.quantidade = Constante.QNT_MINIMA;
        this.fabricante = Constante.FABRICANTE_GEN;
        this.modelo = Constante.MODELO_ND;
        this.disponivel = true;
    }

    public Boolean getDisponivel() {
        return disponivel;
    }

    public void setDisponivel(Boolean disponivel) {
        this.disponivel = disponivel;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public void setLocalizacao(String localizacao) {
        this.localizacao = localizacao;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    @Override
    public String toString() {
        return "Tranqueira{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", categoria=" + categoria +
                ", quantidade=" + quantidade +
                ", localizacao='" + localizacao + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", modelo='" + modelo + '\'' +
                ", disponivel=" + disponivel +
                '}';
    }
}
