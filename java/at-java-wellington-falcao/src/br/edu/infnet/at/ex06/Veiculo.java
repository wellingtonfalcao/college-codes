package br.edu.infnet.at.ex06;

public class Veiculo {
	
	private String placa, modelo;
	private int anoFabricacao;
	private double quilometragem;
	
	public void exibirDetalhes() {
		System.out.println("---------------------------------------");
		System.out.println("Modelo: " + modelo);
		System.out.println("Placa: " + placa);
		System.out.println("Ano de Fabricação: " + anoFabricacao);
		System.out.println("Quilometragem: " + quilometragem);
		System.out.println("");
	}
	
	public void registrarViagem(double km) {
		this.quilometragem += km;
		System.out.println("Viagem registrada com sucesso!");
		System.out.println("");
	}
	

	public static void main(String[] args) {
		
		Veiculo carro1 = new Veiculo();
		carro1.modelo = "Siena";
		carro1.placa = "ASD-7641";
		carro1.anoFabricacao = 2022;
		carro1.quilometragem = 2200.50;
		
		carro1.exibirDetalhes();
		carro1.registrarViagem(250.56);
		
		carro1.exibirDetalhes();
		
		
		Veiculo carro2 = new Veiculo();
		carro2.modelo = "Civic";
		carro2.placa = "AFF-0935";
		carro2.anoFabricacao = 2023;
		carro2.quilometragem = 4500;
		
		carro2.exibirDetalhes();
		carro2.registrarViagem(300.25);
		
		carro2.exibirDetalhes();
		
	}

}

