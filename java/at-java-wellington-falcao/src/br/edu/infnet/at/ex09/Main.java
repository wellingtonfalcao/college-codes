package br.edu.infnet.at.ex09;

public class Main {

	public static void main(String[] args) {
		ContaBancaria conta = new ContaBancaria("Wellington", 5000.00);
		
		conta.exibirSaldo();
		conta.depositar(500.00);
		
		conta.exibirSaldo();
		conta.sacar(5600.00);
		
		conta.exibirSaldo();
		conta.sacar(5000.00);

		conta.exibirSaldo();
		
	}

}
