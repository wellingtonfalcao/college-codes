package br.edu.infnet.tranqueiras.excecoes;

public class TranqueiraNaoEncontradaException extends RuntimeException {

    public TranqueiraNaoEncontradaException(String message) {
        super(message);
    }

    public TranqueiraNaoEncontradaException(Integer id) {
        super("Tranqueira com ID " + id + " não encontrada");
    }
}