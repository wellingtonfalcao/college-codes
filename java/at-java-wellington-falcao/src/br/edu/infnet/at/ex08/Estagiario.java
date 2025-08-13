package br.edu.infnet.at.ex08;

public class Estagiario extends Funcionario{
	
	public Estagiario (String nome, double salarioBase) {
		super(nome, salarioBase);
	}
	
	@Override
	public double calcularSalario() {
		return salarioBase * 0.90;
	}
	
	@Override
	public void mostrarSalario() {
		System.out.println("O salário do Estagiario %s é R$ %.2f.".formatted(nome, calcularSalario()));
	}
	
}