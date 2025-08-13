package br.edu.infnet.at.ex08;

public class Main {

	public static void main(String[] args) {
		Gerente gerente = new Gerente("José", 8600.00);
		Estagiario estagiario = new Estagiario("Enzo", 1600.00);
		
		gerente.mostrarSalario();
		estagiario.mostrarSalario();
	}

}
