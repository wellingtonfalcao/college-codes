package br.edu.infnet.at.ex10;

public class Main {
	
	public static void main(String[] args) {
		
		final String ARQUIVO = "src/br/edu/infnet/at/ex10/compras.txt";
		
		RegistroCompras registro = new RegistroCompras();
		
		StringBuilder lista = registro.receberProdutos();
		registro.gravarArquivo(ARQUIVO, lista);
		registro.lerArquivo(ARQUIVO);
		
		System.out.println("Programa encerrado!");
	}
}
