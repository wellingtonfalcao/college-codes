package br.edu.infnet.at.ex10;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class RegistroCompras {
	
	private String produto;
	private int quantidade;
	private double preco;
	
	public RegistroCompras () {
		
	}
	
	public RegistroCompras(String produto, int quantidade, double preco) {
		this.produto = produto;
		this.quantidade = quantidade;
		this.preco = preco;
	}
	
	public StringBuilder receberProdutos() {
		Scanner scanner = new Scanner(System.in);
		StringBuilder lista = new StringBuilder();
		
		for(int i = 1; i <= 3; i++) {
			
			System.out.println("Digite o nome do %dº produto".formatted(i));
			String produto = scanner.nextLine();
			
			System.out.println("Digite a quantidade do produto");
			int quantidade = scanner.nextInt();
			
			System.out.println("Digite o preço do produto");
			double preco = scanner.nextDouble();
			scanner.nextLine();
			System.out.println("");
			
			RegistroCompras compras = new RegistroCompras(produto, quantidade, preco);
			lista.append("%s - %d - R$ %.2f%n".formatted(produto, quantidade, preco));		
		
		}
		
		System.out.println(lista);
		System.out.println("Obrigado por realizar as compras");
		scanner.close();
		return lista;
		
	}
	
	public void gravarArquivo(String arquivo, StringBuilder lista) {
			
	
		try (BufferedWriter escrita = new BufferedWriter(new FileWriter(arquivo))) {
			escrita.write(lista.toString());
			System.out.println("Arquivo gerado com sucesso!");
		} catch (IOException e) {
			System.out.println("Erro ao escrever o arquivo: " + e.getMessage());
		}
	}
	
	public void lerArquivo(String arquivo) {
		
		try (BufferedReader leitura = new BufferedReader(new FileReader(arquivo))) {
			
			String linha;
			
			System.out.println("");
            System.out.println("******** REGISTRO DE COMPRAS ********");

            while ((linha = leitura.readLine()) != null) {
                System.out.println(linha);
            }
            
            System.out.println("");
			System.out.println("Arquivo lido com sucesso!");
			
		} catch (IOException e) {
			System.out.println("Erro ao ler o arquivo: " + e.getMessage());
		}
	}
}
