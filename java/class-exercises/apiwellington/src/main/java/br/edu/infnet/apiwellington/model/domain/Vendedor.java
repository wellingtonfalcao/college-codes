package br.edu.infnet.apiwellington.model.domain;

public class Vendedor {

	public String nome;
	public int matricula;
	public double salario;
	public boolean ativo;
	
	public Vendedor(String nome, int matricula, double salario, boolean ativo) {
		this.nome = nome;
		this.matricula = matricula;
		this.salario = salario;
		this.ativo = ativo;
	}
	
	public double calcularSalario(double bonus) {

		return ativo ? salario + bonus : 0;
	}
}