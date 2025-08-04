package br.edu.infnet.apiwellington.model;

public class Usuario {
    private int id;
    private String login;
    private String senha; // hash MD5
    private String email;

    public Usuario() {
    }

    public Usuario(int id, String login, String senha, String email) {
        this.id = id;
        this.login = login;
        this.senha = senha;
        this.email = email;
    }
}
