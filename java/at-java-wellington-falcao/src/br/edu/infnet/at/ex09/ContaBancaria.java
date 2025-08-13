package br.edu.infnet.at.ex09;

public class ContaBancaria {
	String titular;
	private double saldo;
	
	public ContaBancaria (String titular, double saldo) {
		this.titular = titular;
		this.saldo = saldo;
	}
	
	public void depositar(double valor) {
		saldo += valor;
	}
	
	public void sacar(double valor) {
		if(saldo < valor) {
			System.out.println("Saldo insuficiente para saque.");
		} else {
			saldo -= valor;
			System.out.println("Saque de R$ %.2f realizado com sucesso.".formatted(valor));
		}
	}
	
	public void exibirSaldo() {
		System.out.println("");
		System.out.println("Titular: " + titular);
		System.out.println("Saldo: R$ %.2f".formatted(saldo));
		
	}
}
