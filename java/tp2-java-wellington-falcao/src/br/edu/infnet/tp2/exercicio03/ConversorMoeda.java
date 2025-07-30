package br.edu.infnet.tp2.exercicio03;

import java.util.Scanner;

public class ConversorMoeda {

    public static void main(String[] args) {
    	   	 	
    	final double COTACAO_DOLAR = 5.49;  
        final double COTACAO_EURO  = 6.34;  
        final double COTACAO_LIBRA = 7.45;  
        
        double valorReais, valorConvertido;
        String opcaoMoeda;
        
        
        
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o valor desejado em reais (R$): ");
        valorReais = scanner.nextDouble();
        scanner.nextLine();
        
        String menu = """
        		
        		Valor informado: R$ %.2f
        		
        		Selecione uma opção de moeda
        		
        		1. Dólar
        		2. Euro
        		3. Libra
        		
        		Escolha uma opção de moeda [1-3]: 
        		
        		""".formatted(valorReais);
        
        System.out.print(menu);               
        opcaoMoeda = scanner.nextLine().trim().toLowerCase();
        
        System.out.printf("\nValor em R$: %.2f\n", valorReais);
        switch (opcaoMoeda) {
           
            case "1":
                valorConvertido = valorReais / COTACAO_DOLAR;
                System.out.printf("Valor convertido: US$ %.2f%n", valorConvertido);
                break;

            case "2":
                valorConvertido = valorReais / COTACAO_EURO;
                System.out.printf("Valor convertido: € %.2f%n", valorConvertido);
                break;

            case "3":
                valorConvertido = valorReais / COTACAO_LIBRA;
                System.out.printf("Valor convertido: £ %.2f%n", valorConvertido);
                break;

            default:
                System.out.println("Opção inválida");
        }

        scanner.close();
    }
}