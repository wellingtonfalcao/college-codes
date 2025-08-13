package br.edu.infnet.at.ex08;

public class Gerente extends Funcionario{
	
	
	public Gerente (String nome, double salarioBase) {
		super(nome, salarioBase);
	}
	
	@Override
	public double calcularSalario() {
		return salarioBase * 1.20;
	}
	
	@Override
	public void mostrarSalario() {
		System.out.println("O salário do Gerente %s é R$ %.2f.".formatted(nome, calcularSalario()));
	}
	
}
